import { Tabs } from "expo-router"
import React from "react"

import { HapticTab } from "@/components/haptic-tab"
import { Colors } from "@/constants/theme"
import { useColorScheme } from "@/hooks/use-color-scheme"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"

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
               tabBarIcon: ({ color }) => <MaterialIcons size={28} name="home" color={color} />,
            }}
         />
         <Tabs.Screen
            name="calendar"
            options={{
               title: "Estatística",
               tabBarIcon: ({ color }) => (
                  <MaterialIcons size={28} name="calendar-today" color={color} />
               ),
            }}
         />
         <Tabs.Screen
            name="explore"
            options={{
               title: "Explore",
               tabBarIcon: ({ color }) => <MaterialIcons size={28} name="send" color={color} />,
            }}
         />
         <Tabs.Screen
            name="profile"
            options={{
               title: "Perfil",
               tabBarIcon: ({ color }) => <MaterialIcons size={28} name="person" color={color} />,
            }}
         />
      </Tabs>
   )
}
