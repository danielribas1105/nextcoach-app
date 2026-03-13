import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BicepsFlexed, LogOut, Ruler, User, Weight } from "lucide-react-native"
import { Text, View } from "react-native"

export default function ProfileScreen() {
   return (
      <View className="flex gap-4 w-full h-full bg-background p-4">
         <View className="w-full">
            <Text className="text-2xl text-primary font-bold">NextCoach AI</Text>
         </View>
         <View className="flex flex-row items-center justify-between w-full">
            <View className="flex flex-row gap-2 items-center">
               <Avatar className="size-14" alt={"Avatar"}>
                  <AvatarImage src={undefined} />
                  <AvatarFallback className="text-lg">
                     <Text>D</Text>
                  </AvatarFallback>
               </Avatar>
               <View>
                  <Text className="font-heading text-lg font-semibold leading-[1.05] text-foreground">
                     Daniel Ribas
                  </Text>
                  <Text className="font-heading text-sm leading-[1.15] text-foreground/70">
                     Plano Básico
                  </Text>
               </View>
            </View>
            <View>
               <LogOut className="size-8 text-destructive" />
            </View>
         </View>
         <View className="grid grid-cols-2 gap-3 w-full">
            <View className="flex-1 gap-3 items-center p-4 rounded-2xl bg-primary/30">
               <View>
                  <Weight className="size-8 text-primary" />
               </View>
               <View className="flex items-center">
                  <Text className="text-4xl">86.0</Text>
                  <Text className="text-xl">Kg</Text>
               </View>
            </View>
            <View className="flex-1 gap-3 items-center p-4 rounded-2xl bg-primary/30">
               <View>
                  <Ruler className="size-8 text-primary" />
               </View>
               <View className="flex items-center">
                  <Text className="text-4xl">168</Text>
                  <Text className="text-xl">Cm</Text>
               </View>
            </View>
            <View className="flex-1 gap-3 items-center p-4 rounded-2xl bg-primary/30">
               <View>
                  <BicepsFlexed className="size-8 text-primary" />
               </View>
               <View className="flex items-center">
                  <Text className="text-4xl">22</Text>
                  <Text className="text-xl">%</Text>
               </View>
            </View>
            <View className="flex-1 gap-3 items-center p-4 rounded-2xl bg-primary/30">
               <View>
                  <User className="size-8 text-primary" />
               </View>
               <View className="flex items-center">
                  <Text className="text-4xl">50</Text>
                  <Text className="text-xl">Anos</Text>
               </View>
            </View>
         </View>
      </View>
   )
}
