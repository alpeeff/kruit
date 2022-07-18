import { Box, Text } from "@/atoms"
import { useFocus } from "@/components/form/hooks/use-focus"
import { IconSearch } from "@/icons/search"
import { Theme } from "@/themes/dark"
import { createBox, TextProps, useTheme } from "@shopify/restyle"
import { TextInput, TextInputProps } from "react-native"

interface Props {
  value: string
  onChange: (value: string) => void
}

const BaseInput = createBox<Theme, TextInputProps & TextProps<Theme>>(TextInput)

const Input: React.FC<Props> = ({ value, onChange }) => {
  const theme = useTheme<Theme>()
  const { isFocused, onFocus, onBlur } = useFocus()

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      backgroundColor="mainForeground"
      borderRadius="xl"
      width="100%"
    >
      <Box paddingLeft="md">
        <IconSearch width={20} height={20} fill={theme.colors.textSecondary} />
      </Box>

      {!isFocused && !value && (
        <Box position="absolute" zIndex={1} left={52} pointerEvents="none">
          <Text color="textSecondary" fontSize={18} lineHeight={22}>
            Search
          </Text>
        </Box>
      )}

      <BaseInput
        flex={1}
        paddingLeft="md"
        paddingVertical="md"
        defaultValue={value}
        onChangeText={onChange}
        fontSize={18}
        color="white"
        onFocus={onFocus}
        onBlur={onBlur}
        autoCorrect={false}
      />
    </Box>
  )
}

export { Input }
