import { BaseButton, Box, Text } from "@/atoms"
import { IconCardio } from "@/icons/cardio"
import { IconGym } from "@/icons/gym"
import { ReactNode } from "react"

export type TrainingType = "workout" | "cardio"

interface Props {
  title: ReactNode
  type: TrainingType
  onPress?: () => void
}

const TrainingCard: React.FC<Props> = ({ title, type, onPress }) => {
  return (
    <BaseButton
      width="100%"
      borderRadius="md"
      marginBottom="md"
      paddingHorizontal="md"
      paddingVertical="lg"
      backgroundColor="mainForeground"
      height={150}
      onPress={onPress}
    >
      <Box justifyContent="flex-end" flex={1}>
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Text fontSize={18}>{title}</Text>

          {type === "cardio" && <IconCardio width={30} height={30} />}
          {type === "workout" && <IconGym width={30} height={30} />}
        </Box>
      </Box>
    </BaseButton>
  )
}

export { TrainingCard }
