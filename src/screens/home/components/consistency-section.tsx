import { Flame } from "lucide-react-native"
import { Pressable, Text, View } from "react-native"

const DAYS_LABEL = ["D", "S", "T", "Q", "Q", "S", "S"]
const workoutStreak = 7
const consistencyByDay = [
   { date: "2025-03-07", completed: true },
   { date: "2025-03-08", completed: true },
   { date: "2025-03-09", completed: false },
   { date: "2025-03-10", completed: true },
   { date: "2025-03-11", completed: true },
   { date: "2025-03-12", completed: true },
   { date: "2025-03-13", completed: false },
]

export default function ConsistencySection() {
   return (
      <View className="flex-col gap-3 px-5 pt-5">
         {/* Cabeçalho */}
         <View className="flex-row items-center justify-between">
            <Text className="text-lg font-semibold text-foreground">Consistência</Text>
            <Pressable>
               <Text className="text-xs text-primary">Ver histórico</Text>
            </Pressable>
         </View>

         {/* Tracker + Streak lado a lado */}
         <View className="flex-row items-stretch gap-3">
            {/* Bolinhas dos dias */}
            <View className="flex-1 rounded-xl border border-border p-5">
               <View className="flex-row justify-between">
                  {consistencyByDay.map((day, i) => {
                     const label = DAYS_LABEL[new Date(day.date).getDay()]
                     return (
                        <View key={day.date} className="items-center gap-1.5">
                           <Text className="text-[10px] text-muted-foreground">{label}</Text>
                           <View
                              className={`size-7 rounded-full ${
                                 day.completed ? "bg-primary" : "bg-muted"
                              }`}
                           />
                        </View>
                     )
                  })}
               </View>
            </View>

            {/* Badge de streak */}
            <View className="items-center justify-center gap-2 rounded-xl bg-amber-100 px-5 py-2">
               <Flame size={20} className="text-orange-500" />
               <Text className="text-base font-semibold text-foreground">{workoutStreak}</Text>
            </View>
         </View>
      </View>
   )
}
