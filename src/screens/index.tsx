import { TabBarLabel } from "@/components/tab-bar-label"
import { IconGym } from "@/icons/gym"
import { IconStats } from "@/icons/stats"
import { ScreensHomeRoot } from "@/screens/home"
import { ScreensStatsRoot } from "@/screens/stats"
import { Theme } from "@/themes/dark"
import { RootStackParamList } from "@/types/navigation"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { useTheme } from "@shopify/restyle"
import { Platform } from "react-native"

const Tab = createBottomTabNavigator<RootStackParamList>()

const ScreensRoot: React.FC = () => {
  const theme = useTheme<Theme>()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.mainBackground,
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textSecondary,
        tabBarLabel: TabBarLabel,
      }}
      initialRouteName="Stats"
      safeAreaInsets={Platform.OS === "android" ? { bottom: 10 } : undefined}
    >
      <Tab.Screen
        name="Home"
        component={ScreensHomeRoot}
        options={{
          tabBarIcon: ({ color }) => (
            <IconGym width={30} height={30} fill={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Stats"
        component={ScreensStatsRoot}
        options={{
          tabBarIcon: ({ color }) => (
            <IconStats width={25} height={30} fill={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
export { ScreensRoot }
