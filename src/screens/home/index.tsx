import { Box } from "@/atoms"
import { PageHeader } from "@/components/header"
import { HomeStackParamList } from "@/screens/home/@types"
import { useHomeNavigation } from "@/screens/home/hooks/use-navigation"
import { ScreensHomeMain } from "@/screens/home/main"
import { ScreensHomeWorkout } from "@/screens/home/workout"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator<HomeStackParamList>()

const ScreensHomeRoot: React.FC = () => {
  const { goBack } = useHomeNavigation()

  return (
    <Stack.Navigator
      initialRouteName="Home.Main"
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
        header: (props) => (
          <PageHeader
            {...props}
            onBack={goBack}
            title={
              <Box
                width={100}
                height={5}
                backgroundColor="white"
                borderRadius="md"
              />
            }
            headerRight={"skip"}
          />
        ),
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="Home.Main" component={ScreensHomeMain} />

      <Stack.Screen
        name="Home.Training"
        component={ScreensHomeWorkout}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  )
}

export { ScreensHomeRoot }
