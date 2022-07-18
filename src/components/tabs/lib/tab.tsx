import { BaseButton, Box, Text } from "@/atoms"
import { ReactNode } from "react"
import { View } from "react-native"

export interface ITab {
  title: ReactNode
  id: string
  component: React.FC
}

interface Props extends ITab {
  onRef: (ref: View) => void
  onSelect: () => void
}

const Tab: React.FC<Props> = ({ title, onRef, onSelect }) => {
  return (
    <Box flexGrow={0} ref={(ref: View): void => onRef(ref)} marginRight="lg">
      <BaseButton onPress={onSelect}>
        <Text>{title}</Text>
      </BaseButton>
    </Box>
  )
}

export { Tab }
