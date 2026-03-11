import { Tabs } from "expo-router"
import React from "react"

import { HapticTab } from "@/components/haptic-tab"
import { Colors } from "@/constants/theme"
import { useColorScheme } from "@/hooks/use-color-scheme"
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
            name="index"
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
            name="explore"
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
