import { ScrollView } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import ConsistencySection from "./components/consistency-section"
import HomeBanner from "./components/home-banner"
import TodayWorkoutSection from "./components/today-workout-section"

export default function HomeScreen() {
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
