import type { LucideIcon } from "lucide-react-native"
import { Text, View } from "react-native"

interface StatCardProps {
   icon: LucideIcon
   value: string
   label: string
}

export function StatCard({ icon: Icon, value, label }: StatCardProps) {
   return (
      <View className="flex-1 items-center gap-5 rounded-xl bg-primary/10 p-5">
         <View className="rounded-full bg-primary/10 p-2.5">
            <Icon size={16} color="#6d28d9" />
         </View>
         <View className="items-center gap-1.5">
            <Text className="text-2xl font-semibold text-foreground">{value}</Text>
            <Text className="text-xs text-muted-foreground">{label}</Text>
         </View>
      </View>
   )
}
