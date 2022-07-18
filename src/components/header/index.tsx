import { Box, Text } from "@/atoms"
import { BackButton } from "@/components/back-button"
import { Theme } from "@/themes/dark"
import { NativeStackHeaderProps } from "@react-navigation/native-stack"
import { useTheme } from "@shopify/restyle"
import { ReactNode } from "react"
import { useSafeAreaInsets } from "react-native-safe-area-context"

type Props = {
  onBack?: () => void
  title?: ReactNode
  headerRight?: ReactNode
} & NativeStackHeaderProps

const PageHeader: React.FC<Props> = ({ title, onBack, headerRight }) => {
  const theme = useTheme<Theme>()
  const { top } = useSafeAreaInsets()

  return (
    <Box
      backgroundColor={"mainBackground"}
      style={{ paddingTop: top + theme.spacing.xs }}
    >
      <Box
        paddingHorizontal="md"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box width={"33.33%"} alignItems="flex-start">
          {onBack && <BackButton goBack={onBack} />}
        </Box>

        <Box width={"33.33%"} alignItems="center">
          {title}
        </Box>

        <Box width={"33.33%"} alignItems="flex-end">
          <Text>{headerRight}</Text>
        </Box>
      </Box>
    </Box>
  )
}

export { PageHeader }
