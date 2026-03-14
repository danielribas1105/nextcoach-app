import { CircleHelp, Zap } from "lucide-react-native"
import { Pressable, Text, View } from "react-native"

interface Exercise {
   id: string
   name: string
   sets: number
   reps: string
   restTimeInSeconds: number
   order: number
}

interface ExerciseCardProps {
   exercise: Exercise
   onHelp?: (exercise: Exercise) => void
}

export function ExerciseCard({ exercise, onHelp }: ExerciseCardProps) {
   return (
      <View className="flex-col gap-3 rounded-xl border border-border p-5">
         {/* Nome + botão de ajuda */}
         <View className="flex-row items-center justify-between">
            <Text className="text-base font-semibold text-foreground">{exercise.name}</Text>
            <Pressable
               onPress={() => onHelp?.(exercise)}
               className="size-9 items-center justify-center"
            >
               <CircleHelp size={20} color="#9ca3af" />
            </Pressable>
         </View>

         {/* Badges: séries, reps, descanso */}
         <View className="flex-row items-center gap-1.5">
            <View className="rounded-full bg-muted px-2.5 py-1">
               <Text className="text-xs font-semibold uppercase text-muted-foreground">
                  {exercise.sets} séries
               </Text>
            </View>
            <View className="rounded-full bg-muted px-2.5 py-1">
               <Text className="text-xs font-semibold uppercase text-muted-foreground">
                  {exercise.reps} reps
               </Text>
            </View>
            <View className="flex-row items-center gap-1 rounded-full bg-muted px-2.5 py-1">
               <Zap size={14} color="#9ca3af" />
               <Text className="text-xs font-semibold uppercase text-muted-foreground">
                  {exercise.restTimeInSeconds}s
               </Text>
            </View>
         </View>
      </View>
   )
}
