import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function ExercisesScreen() {
   return (
      <SafeAreaView className="flex-1 bg-background" edges={["top"]}>
         <View>
            <Text>Treino Ativo</Text>
         </View>
      </SafeAreaView>
   )
}
