import { Image, Pressable, Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

const userName = "Daniel Ribas"

/** Barra de banner com imagem de fundo + gradiente + saudação */
export default function HomeBanner() {
   const insets = useSafeAreaInsets()

   return (
      <View
         className="relative overflow-hidden rounded-b-[32px]"
         style={{ height: 296, paddingTop: insets.top }}
      >
         {/* Imagem de fundo */}
         <Image
            source={require("@/assets/images/home-banner.jpg")}
            className="absolute inset-0 h-full w-full"
            resizeMode="cover"
         />

         {/* Gradiente simulado com uma View semi-transparente */}
         <View
            className="absolute inset-0"
            style={{
               backgroundColor: "rgba(0,0,0,0.45)",
            }}
         />

         {/* Conteúdo do banner */}
         <View className="relative flex-1 justify-between px-5 pb-10 pt-4">
            {/* Logo */}
            <Text
               className="text-[22px] uppercase tracking-widest text-white"
               style={{ fontFamily: "Anton" }} // troque pelo var correto do seu projeto
            >
               NextCoach.AI
            </Text>

            {/* Saudação + CTA */}
            <View className="flex-row items-end justify-between">
               <View className="gap-1.5">
                  <Text className="text-2xl font-semibold text-white">Olá, {userName}</Text>
                  <Text className="text-sm text-white/70">Bora treinar hoje?</Text>
               </View>

               <Pressable className="rounded-full bg-primary px-4 py-2">
                  <Text className="text-sm font-semibold text-primary-foreground">Bora!</Text>
               </Pressable>
            </View>
         </View>
      </View>
   )
}
