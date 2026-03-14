import dayjs from "dayjs"
import { ScrollView, Text, View } from "react-native"

type ConsistencyByDay = Record<
   string,
   { workoutDayCompleted?: boolean; workoutDayStarted?: boolean }
>

interface StatsHeatmapProps {
   consistencyByDay: ConsistencyByDay
   today: dayjs.Dayjs
}

interface WeekData {
   dates: dayjs.Dayjs[]
}

interface MonthGroup {
   label: string
   weeks: WeekData[]
}

const MONTH_LABELS = [
   "Jan",
   "Fev",
   "Mar",
   "Abr",
   "Mai",
   "Jun",
   "Jul",
   "Ago",
   "Set",
   "Out",
   "Nov",
   "Dez",
]

function getMonday(date: dayjs.Dayjs): dayjs.Dayjs {
   const day = date.day()
   return day === 0 ? date.subtract(6, "day") : date.subtract(day - 1, "day")
}

function buildMonthGroups(today: dayjs.Dayjs): MonthGroup[] {
   const startOfRange = today.subtract(2, "month").startOf("month")
   const endOfRange = today.endOf("month")
   const firstMonday = getMonday(startOfRange)
   const lastSunday = getMonday(endOfRange).add(6, "day")

   const allWeeks: WeekData[] = []
   let currentMonday = firstMonday

   while (!currentMonday.isAfter(lastSunday)) {
      allWeeks.push({
         dates: Array.from({ length: 7 }, (_, i) => currentMonday.add(i, "day")),
      })
      currentMonday = currentMonday.add(7, "day")
   }

   const monthGroups: MonthGroup[] = []
   for (const week of allWeeks) {
      const monthLabel = MONTH_LABELS[week.dates[3].month()]
      const last = monthGroups[monthGroups.length - 1]
      if (last?.label === monthLabel) {
         last.weeks.push(week)
      } else {
         monthGroups.push({ label: monthLabel, weeks: [week] })
      }
   }
   return monthGroups
}

export function StatsHeatmap({ consistencyByDay, today }: StatsHeatmapProps) {
   const monthGroups = buildMonthGroups(today)

   return (
      <ScrollView
         horizontal
         showsHorizontalScrollIndicator={false}
         className="rounded-xl border border-border"
         contentContainerStyle={{ padding: 20, gap: 4 }}
      >
         {monthGroups.map((group) => (
            <View key={group.label} style={{ gap: 6 }}>
               {/* Label do mês */}
               <Text className="text-xs text-muted-foreground">{group.label}</Text>

               {/* Semanas lado a lado */}
               <View style={{ flexDirection: "row", gap: 4 }}>
                  {group.weeks.map((week) => {
                     const weekKey = week.dates[0].format("YYYY-MM-DD")
                     return (
                        <View key={weekKey} style={{ flexDirection: "column", gap: 4 }}>
                           {week.dates.map((date) => {
                              const dateStr = date.format("YYYY-MM-DD")
                              const dayData = consistencyByDay[dateStr]

                              if (dayData?.workoutDayCompleted) {
                                 return (
                                    <View
                                       key={dateStr}
                                       className="bg-primary"
                                       style={{ width: 20, height: 20, borderRadius: 4 }}
                                    />
                                 )
                              }
                              if (dayData?.workoutDayStarted) {
                                 return (
                                    <View
                                       key={dateStr}
                                       className="bg-primary/20"
                                       style={{ width: 20, height: 20, borderRadius: 4 }}
                                    />
                                 )
                              }
                              return (
                                 <View
                                    key={dateStr}
                                    className="border border-border"
                                    style={{ width: 20, height: 20, borderRadius: 4 }}
                                 />
                              )
                           })}
                        </View>
                     )
                  })}
               </View>
            </View>
         ))}
      </ScrollView>
   )
}
