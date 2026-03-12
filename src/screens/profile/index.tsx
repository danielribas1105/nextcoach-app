import { Text, TouchableOpacity, View } from "react-native"

export default function ProfileScreen() {
   return (
      <View>
         <Text>Olá, mundo!</Text>
         <TouchableOpacity onPress={() => alert("clicou")}>
            <Text>Clique aqui</Text>
         </TouchableOpacity>
      </View>
   )
}
