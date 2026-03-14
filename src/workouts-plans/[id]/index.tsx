import ConsistencySection from "@/src/screens/home/components/consistency-section"
import HomeBanner from "@/src/screens/home/components/home-banner"
import TodayWorkoutSection from "@/src/screens/home/components/today-workout-section"
import { ScrollView } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

export default function WorkoutsPlans() {
   const insets = useSafeAreaInsets()

   return (
      <ScrollView
         className="flex-1 bg-background"
         contentContainerStyle={{ paddingBottom: insets.bottom + 80 }} // espaço para BottomNav
         showsVerticalScrollIndicator={false}
      >
         <HomeBanner />
         <ConsistencySection />
         <TodayWorkoutSection />
      </ScrollView>
   )
}
