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
            name="exercises"
            options={{
               title: "Exercícios",
               tabBarIcon: ({ color }) => <Dumbbell size={28} color={color} />,
            }}
         />
         <Tabs.Screen
            name="evolution"
            options={{
               title: "Evolução",
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
