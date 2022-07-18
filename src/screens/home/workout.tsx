import { AnimatedScrollView, Box, Text } from "@/atoms"
import { List } from "@/components/list"
import { PageRoot } from "@/components/page-root"
import { HomeStackParamList } from "@/screens/home/@types"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

type Props = NativeStackScreenProps<HomeStackParamList, "Home.Training">

const items = [
  { id: "1", reps: 10, rounds: 4, time: 10, title: "Pull Up" },
  { id: "2", reps: 10, rounds: 4, time: 60, title: "Pull Up" },
  { id: "3", reps: 10, rounds: 4, time: 60, title: "Pull Up" },
  { id: "4", reps: 10, rounds: 4, time: 60, title: "Pull Up" },
  { id: "5", reps: 10, rounds: 4, time: 60, title: "Pull Up" },
  { id: "6", reps: 10, rounds: 4, time: 60, title: "Pull Up" },
  { id: "7", reps: 10, rounds: 4, time: 60, title: "Pull Up" },
]

const ScreensHomeWorkout: React.FC<Props> = ({}) => {
  return (
    <PageRoot>
      <Box flex={1} />

      <Box flex={2}>
        <Text marginBottom="md">Workout List</Text>

        <AnimatedScrollView>
          <List items={items} />
        </AnimatedScrollView>
      </Box>
    </PageRoot>
  )
}

export { ScreensHomeWorkout }
