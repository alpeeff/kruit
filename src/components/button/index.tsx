import { BaseButton, Text } from "@/atoms"
import { Theme } from "@/themes/dark"
import { ColorProps } from "@shopify/restyle"

interface Props {
  /**
   *  @default primary
   */
  intent?: ColorProps<Theme>["color"]
}

const Button: React.FC<Props> = ({ children, intent = "primary" }) => {
  return (
    <BaseButton
      backgroundColor={intent}
      borderRadius="xl"
      paddingVertical="md"
      paddingHorizontal="md"
      activeOpacity={0.9}
    >
      <Text textAlign="center" fontSize={20} color="white">
        {children}
      </Text>
    </BaseButton>
  )
}

export { Button }
