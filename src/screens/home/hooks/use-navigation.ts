import { HomeStackParamList } from "@/screens/home/@types"
import { NavigationProp, useNavigation } from "@react-navigation/native"

const useHomeNavigation = <
  T extends NavigationProp<HomeStackParamList>
>(): T => {
  return useNavigation<T>()
}

export { useHomeNavigation }
