import { useRouter } from "expo-router"
import { Calendar, Dumbbell, Timer } from "lucide-react-native"
import { useState } from "react"
import { ImageBackground, ScrollView, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { BackButton } from "./components/back-button"
import { CompleteWorkoutButton } from "./components/complete-workout-button"
import { ExerciseCard } from "./components/exercise-card"
import { StartWorkoutButton } from "./components/start-workout-button"

// ─── Tipos ────────────────────────────────────────────────────────────────────
type SessionStatus = "idle" | "inProgress" | "completed"

// ─── Mock ─────────────────────────────────────────────────────────────────────
const MOCK_WORKOUT_DAY = {
   id: "day-1",
   workoutPlanId: "plan-1",
   name: "Peito & Tríceps",
   weekDay: "THURSDAY",
   estimatedDurationInSeconds: 4200,
   coverImageUrl: null as string | null,
   exercises: [
      { id: "e1", name: "Supino Reto", sets: 4, reps: "8-12", restTimeInSeconds: 90, order: 1 },
      {
         id: "e2",
         name: "Crucifixo com Halteres",
         sets: 3,
         reps: "12",
         restTimeInSeconds: 60,
         order: 2,
      },
      { id: "e3", name: "Supino Inclinado", sets: 3, reps: "10", restTimeInSeconds: 90, order: 3 },
      { id: "e4", name: "Tríceps Pulley", sets: 4, reps: "12-15", restTimeInSeconds: 60, order: 4 },
      { id: "e5", name: "Tríceps Testa", sets: 3, reps: "10", restTimeInSeconds: 60, order: 5 },
   ],
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
const WEEKDAY_LABELS: Record<string, string> = {
   MONDAY: "SEGUNDA",
   TUESDAY: "TERÇA",
   WEDNESDAY: "QUARTA",
   THURSDAY: "QUINTA",
   FRIDAY: "SEXTA",
   SATURDAY: "SÁBADO",
   SUNDAY: "DOMINGO",
}

const WEEKDAY_TITLE_LABELS: Record<string, string> = {
   MONDAY: "Segunda",
   TUESDAY: "Terça",
   WEDNESDAY: "Quarta",
   THURSDAY: "Quinta",
   FRIDAY: "Sexta",
   SATURDAY: "Sábado",
   SUNDAY: "Domingo",
}

// ─────────────────────────────────────────────────────────────────────────────

export default function WorkoutDayScreen() {
   const router = useRouter()
   const [sessionStatus, setSessionStatus] = useState<SessionStatus>("idle")
   const [isPending, setIsPending] = useState(false)

   const { name, weekDay, estimatedDurationInSeconds, exercises, coverImageUrl } = MOCK_WORKOUT_DAY

   const durationInMinutes = Math.round(estimatedDurationInSeconds / 60)
   const hasInProgressSession = sessionStatus === "inProgress"
   const hasCompletedSession = sessionStatus === "completed"

   const handleStart = async () => {
      setIsPending(true)
      await new Promise((r) => setTimeout(r, 800)) // simula chamada API
      setSessionStatus("inProgress")
      setIsPending(false)
   }

   const handleComplete = async () => {
      setIsPending(true)
      await new Promise((r) => setTimeout(r, 800))
      setSessionStatus("completed")
      setIsPending(false)
   }

   const pageTitle =
      hasInProgressSession || hasCompletedSession ? "Treino de Hoje" : WEEKDAY_TITLE_LABELS[weekDay]

   return (
      <SafeAreaView className="flex-1 bg-background" edges={["top"]}>
         <ScrollView
            className="flex-1"
            contentContainerStyle={{ paddingBottom: 100 }}
            showsVerticalScrollIndicator={false}
         >
            {/* ── Header ── */}
            <View className="flex-row items-center justify-between px-5 py-4">
               <BackButton />
               <Text className="text-lg font-semibold text-foreground">{pageTitle}</Text>
               <View className="size-6" />
            </View>

            {/* ── Cover card ── */}
            <View className="px-5">
               <ImageBackground
                  source={
                     coverImageUrl ? { uri: coverImageUrl } : require("@/assets/images/pesos.jpg")
                  }
                  className="h-50 w-full overflow-hidden rounded-xl"
                  resizeMode="cover"
               >
                  {/* Overlay */}
                  <View className="absolute inset-0 bg-black/40" />

                  {/* Conteúdo sobre a imagem */}
                  <View className="relative flex-1 justify-between p-5">
                     {/* Badge do dia */}
                     <View className="flex-row items-center gap-1 self-start rounded-full bg-white/16 px-2.5 py-1.5">
                        <Calendar size={14} color="white" />
                        <Text className="text-xs font-semibold uppercase text-white">
                           {WEEKDAY_LABELS[weekDay]}
                        </Text>
                     </View>

                     {/* Nome + meta + botão */}
                     <View className="flex-row items-end justify-between">
                        <View className="flex-col gap-2">
                           <Text className="text-2xl font-semibold leading-tight text-white">
                              {name}
                           </Text>
                           <View className="flex-row items-center gap-2">
                              <View className="flex-row items-center gap-1">
                                 <Timer size={14} color="rgba(255,255,255,0.7)" />
                                 <Text className="text-xs text-white/70">
                                    {durationInMinutes}min
                                 </Text>
                              </View>
                              <View className="flex-row items-center gap-1">
                                 <Dumbbell size={14} color="rgba(255,255,255,0.7)" />
                                 <Text className="text-xs text-white/70">
                                    {exercises.length} exercícios
                                 </Text>
                              </View>
                           </View>
                        </View>

                        {/* Botão de ação */}
                        {!hasInProgressSession && !hasCompletedSession && (
                           <StartWorkoutButton isPending={isPending} onPress={handleStart} />
                        )}
                        {hasCompletedSession && (
                           <Text className="text-sm font-semibold text-white/70">Concluído!</Text>
                        )}
                     </View>
                  </View>
               </ImageBackground>
            </View>

            {/* ── Lista de exercícios ── */}
            <View className="flex-col gap-3 px-5 pt-5">
               {[...exercises]
                  .sort((a, b) => a.order - b.order)
                  .map((exercise) => (
                     <ExerciseCard
                        key={exercise.id}
                        exercise={exercise}
                        onHelp={(ex) => {
                           // Aqui você abre o chat/modal de ajuda
                           console.log(`Ajuda: ${ex.name}`)
                        }}
                     />
                  ))}
            </View>

            {/* ── Botão concluir ── */}
            {hasInProgressSession && (
               <View className="px-5 pt-5">
                  <CompleteWorkoutButton isPending={isPending} onPress={handleComplete} />
               </View>
            )}
         </ScrollView>
      </SafeAreaView>
   )
}
