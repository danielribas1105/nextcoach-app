import { Tabs } from "expo-router"
import { ChartNoAxesCombined, Dumbbell, Home, User } from "lucide-react-native"

export default function TabLayout() {
   return (
      <Tabs
         screenOptions={{
            headerShown: false,
         }}
      >
         <Tabs.Screen
            name="home"
            options={{
               title: "Home",
               tabBarIcon: ({ color }) => <Home size={28} color={color} />,
            }}
         />
         <Tabs.Screen
            name="workouts-plans"
            options={{
               title: "Treinos",
               tabBarIcon: ({ color }) => <Dumbbell size={28} color={color} />,
            }}
         />
         <Tabs.Screen
            name="stats"
            options={{
               title: "Estatísticas",
               tabBarIcon: ({ color }) => <ChartNoAxesCombined size={28} color={color} />,
            }}
         />
         <Tabs.Screen
            name="profile"
            options={{
               title: "Perfil",
               tabBarIcon: ({ color }) => <User size={28} color={color} />,
            }}
         />
      </Tabs>
   )
}
