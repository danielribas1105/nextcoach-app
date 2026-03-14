import { Flame } from "lucide-react-native"
import { ImageBackground, Text, View } from "react-native"

interface StreakBannerProps {
   workoutStreak: number
}

export function StreakBanner({ workoutStreak }: StreakBannerProps) {
   const isZero = workoutStreak === 0

   return (
      <ImageBackground
         source={require("@/assets/images/stats-banner.png")}
         className="overflow-hidden rounded-xl"
         imageStyle={[{ resizeMode: "cover" }, isZero && { opacity: 0.4 }]}
      >
         {/* Overlay escuro */}
         <View className="absolute inset-0 bg-black/30" />

         <View className="relative items-center gap-6 px-5 py-10">
            <View className="rounded-full border border-white/20 bg-white/20 p-3">
               <Flame size={32} color="white" />
            </View>
            <View className="items-center gap-1">
               <Text className="text-5xl font-semibold text-white">{workoutStreak} dias</Text>
               <Text className="text-base text-white/60">Sequência Atual</Text>
            </View>
         </View>
      </ImageBackground>
   )
}
