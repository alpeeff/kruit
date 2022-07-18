import { Box } from "@/atoms"
import { Theme } from "@/themes/dark"
import { ColorProps, useTheme } from "@shopify/restyle"
import { useSafeAreaInsets } from "react-native-safe-area-context"

interface Props {
  backgroundColor?: ColorProps<Theme>["color"]
}

const PageRoot: React.FC<Props> = ({
  children,
  backgroundColor = "mainBackground",
}) => {
  const theme = useTheme<Theme>()
  const { top } = useSafeAreaInsets()

  return (
    <Box
      backgroundColor={backgroundColor}
      paddingHorizontal="md"
      flex={1}
      style={{ paddingTop: top + theme.spacing.lg }}
    >
      {children}
    </Box>
  )
}

export { PageRoot }
