import { Image, Pressable, Text, View } from "react-native"

const todayWorkoutDay = {
   name: "Treino A – Peito e Tríceps",
   weekDay: "Quinta-feira",
   estimatedDurationInSeconds: 3600,
   exercisesCount: 8,
}

function formatDuration(seconds: number) {
   const m = Math.round(seconds / 60)
   return m >= 60 ? `${Math.floor(m / 60)}h${m % 60 > 0 ? ` ${m % 60}min` : ""}` : `${m} min`
}

export default function TodayWorkoutSection() {
   if (!todayWorkoutDay) return null

   return (
      <View className="flex-col gap-3 p-5">
         {/* Cabeçalho */}
         <View className="flex-row items-center justify-between">
            <Text className="text-lg font-semibold text-foreground">Treino de Hoje</Text>
            <Pressable>
               <Text className="text-xs text-primary">Ver treinos</Text>
            </Pressable>
         </View>

         {/* Card clicável */}
         <Pressable
            className="overflow-hidden rounded-2xl border border-border bg-card active:opacity-80"
            onPress={() => {
               // navigate para /workout-plans/...
            }}
         >
            {/* Imagem de capa */}
            <Image
               source={require("@/assets/images/pesos.jpg")}
               className="h-40 w-full"
               resizeMode="cover"
            />

            {/* Informações */}
            <View className="gap-1 p-4">
               <Text className="text-base font-semibold text-foreground">
                  {todayWorkoutDay.name}
               </Text>
               <Text className="text-sm text-muted-foreground">{todayWorkoutDay.weekDay}</Text>

               <View className="mt-2 flex-row gap-4">
                  <Text className="text-xs text-muted-foreground">
                     ⏱ {formatDuration(todayWorkoutDay.estimatedDurationInSeconds)}
                  </Text>
                  <Text className="text-xs text-muted-foreground">
                     🏋️ {todayWorkoutDay.exercisesCount} exercícios
                  </Text>
               </View>
            </View>
         </Pressable>
      </View>
   )
}
