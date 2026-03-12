import { Tabs } from "expo-router"
import React from "react"

import { HapticTab } from "@/src/components/haptic-tab"
import { Colors } from "@/src/constants/theme"
import { useColorScheme } from "@/src/hooks/use-color-scheme"
import { ChartNoAxesCombined, Dumbbell, Home, User } from "lucide-react-native"

export default function TabLayout() {
   const colorScheme = useColorScheme()

   return (
      <Tabs
         screenOptions={{
            tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
            headerShown: false,
            tabBarButton: HapticTab,
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
               title: "Treinos",
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
