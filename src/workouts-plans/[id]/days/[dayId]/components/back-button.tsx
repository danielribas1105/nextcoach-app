import { useRouter } from "expo-router"
import { ChevronLeft } from "lucide-react-native"
import { Pressable } from "react-native"

export function BackButton() {
   const router = useRouter()

   return (
      <Pressable
         onPress={() => router.back()}
         className="size-10 items-center justify-center rounded-full"
      >
         <ChevronLeft size={24} className="text-foreground" />
      </Pressable>
   )
}
