import { ActivityIndicator, Pressable, Text } from "react-native"

interface StartWorkoutButtonProps {
   isPending?: boolean
   onPress: () => void
}

export function StartWorkoutButton({ isPending, onPress }: StartWorkoutButtonProps) {
   return (
      <Pressable
         onPress={onPress}
         disabled={isPending}
         className="rounded-full bg-primary px-4 py-2 opacity-100 disabled:opacity-50"
      >
         {isPending ? (
            <ActivityIndicator size="small" color="white" />
         ) : (
            <Text className="text-sm font-semibold text-primary-foreground">Iniciar Treino</Text>
         )}
      </Pressable>
   )
}
