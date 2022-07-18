import { StatsStackParamList } from "@/screens/stats/@types"
import { NavigationProp, useNavigation } from "@react-navigation/native"

const useStatsNavigation = <
  T extends NavigationProp<StatsStackParamList>
>(): T => {
  return useNavigation<T>()
}

export { useStatsNavigation }
