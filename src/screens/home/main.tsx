import { AnimatedScrollView, Box } from "@/atoms"
import { Input } from "@/components/form/input"
import { PageRoot } from "@/components/page-root"
import { TrainKind } from "@/components/train-kind"
import { TrainingCard } from "@/components/training-card"
import { useHomeNavigation } from "@/screens/home/hooks/use-navigation"
import React, { useState } from "react"

const ScreensHomeMain: React.FC = () => {
  const [value, setValue] = useState("")
  const { navigate } = useHomeNavigation()

  return (
    <PageRoot>
      <Box marginBottom="lg">
        <Input value={value} onChange={setValue} />
      </Box>

      <AnimatedScrollView flexGrow={0} marginBottom="lg" horizontal>
        <TrainKind icon="workout" />
        <TrainKind icon="cardio" />
      </AnimatedScrollView>

      <Box>
        <TrainingCard
          title="Workout Training Hard"
          type="workout"
          onPress={(): void => navigate("Home.Training", { id: "1" })}
        />

        <TrainingCard
          title="Cardio Training Hard"
          type="cardio"
          onPress={(): void => navigate("Home.Training", { id: "2" })}
        />
      </Box>
    </PageRoot>
  )
}

export { ScreensHomeMain }
