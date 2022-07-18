import { StatsStackParamList } from "@/screens/stats/@types"
import { ScreensStatsMain } from "@/screens/stats/main"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"

const Stack = createNativeStackNavigator<StatsStackParamList>()

const ScreensStatsRoot: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Stats.Main" component={ScreensStatsMain} />
    </Stack.Navigator>
  )
}

export { ScreensStatsRoot }
