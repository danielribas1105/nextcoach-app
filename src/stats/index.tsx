import dayjs from "dayjs"
import { CircleCheck, CirclePercent, Hourglass } from "lucide-react-native"
import { ScrollView, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { StatCard } from "./components/stat-card"
import { StatsHeatmap } from "./components/stats-heatmap"
import { StreakBanner } from "./components/streak-banner"

// ─── Dados mock ───────────────────────────────────────────────────────────────
const today = dayjs()

const MOCK_STATS = {
   workoutStreak: 12,
   completedWorkoutsCount: 34,
   conclusionRate: 0.82,
   totalTimeInSeconds: 3600 * 47 + 60 * 23, // 47h23m
   consistencyByDay: (() => {
      const map: Record<string, { workoutDayCompleted?: boolean; workoutDayStarted?: boolean }> = {}
      for (let i = 0; i < 80; i++) {
         const date = today.subtract(i, "day").format("YYYY-MM-DD")
         const rand = Math.random()
         if (rand > 0.55) map[date] = { workoutDayCompleted: true }
         else if (rand > 0.35) map[date] = { workoutDayStarted: true }
      }
      return map
   })(),
}
// ─────────────────────────────────────────────────────────────────────────────

function formatTotalTime(totalSeconds: number): string {
   const hours = Math.floor(totalSeconds / 3600)
   const minutes = Math.floor((totalSeconds % 3600) / 60)
   return `${hours}h${String(minutes).padStart(2, "0")}m`
}

export default function StatsScreen() {
   const {
      workoutStreak,
      completedWorkoutsCount,
      conclusionRate,
      totalTimeInSeconds,
      consistencyByDay,
   } = MOCK_STATS

   return (
      <SafeAreaView className="flex-1 bg-background" edges={["top"]}>
         <ScrollView
            className="flex-1"
            contentContainerStyle={{ paddingBottom: 100 }}
            showsVerticalScrollIndicator={false}
         >
            {/* Header */}
            <View className="h-14 justify-center px-5">
               <Text className="text-[22px] uppercase text-foreground tracking-widest">
                  NextCoach.AI
               </Text>
            </View>

            {/* Streak banner */}
            <View className="px-5">
               <StreakBanner workoutStreak={workoutStreak} />
            </View>

            {/* Seção de stats */}
            <View className="flex-col gap-3 p-5">
               <Text className="text-lg font-semibold text-foreground">Consistência</Text>

               {/* Heatmap */}
               <StatsHeatmap consistencyByDay={consistencyByDay} today={today} />

               {/* Cards 2 colunas */}
               <View className="flex-row gap-3">
                  <StatCard
                     icon={CircleCheck}
                     value={String(completedWorkoutsCount)}
                     label="Treinos Feitos"
                  />
                  <StatCard
                     icon={CirclePercent}
                     value={`${Math.round(conclusionRate * 100)}%`}
                     label="Taxa de conclusão"
                  />
               </View>

               {/* Card full width */}
               <StatCard
                  icon={Hourglass}
                  value={formatTotalTime(totalTimeInSeconds)}
                  label="Tempo Total"
               />
            </View>
         </ScrollView>
      </SafeAreaView>
   )
}
