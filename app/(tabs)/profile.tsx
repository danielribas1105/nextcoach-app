import { Image, Text, TouchableOpacity, View } from "react-native"

export default function ProfileScreen() {
   return (
      <View>
         <Text>Olá, mundo!</Text>
         <Image source={{ uri: "https://..." }} />
         <TouchableOpacity onPress={() => alert("clicou")}>
            <Text>Clique aqui</Text>
         </TouchableOpacity>
      </View>
   )
}
