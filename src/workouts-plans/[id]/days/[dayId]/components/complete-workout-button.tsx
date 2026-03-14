import { ActivityIndicator, Pressable, Text } from "react-native"

interface CompleteWorkoutButtonProps {
   isPending?: boolean
   onPress: () => void
}

export function CompleteWorkoutButton({ isPending, onPress }: CompleteWorkoutButtonProps) {
   return (
      <Pressable
         onPress={onPress}
         disabled={isPending}
         className="w-full rounded-full border border-border py-3 items-center"
      >
         {isPending ? (
            <ActivityIndicator size="small" />
         ) : (
            <Text className="text-sm font-semibold text-foreground">Marcar como concluído</Text>
         )}
      </Pressable>
   )
}
