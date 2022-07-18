import { AnimatedBox } from "@/atoms"
import { Theme } from "@/themes/dark"
import { useTheme } from "@shopify/restyle"
import { StyleSheet } from "react-native"
import {
  SharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated"

interface Props {
  measure: SharedValue<{ x: number; width: number }>
}

const TabsIndicator: React.FC<Props> = ({ measure }) => {
  const theme = useTheme<Theme>()

  const animatedStyles = useAnimatedStyle(() => {
    return {
      width: withTiming(measure.value.width),
      transform: [{ translateX: withTiming(measure.value.x) }],
    }
  })

  return (
    <AnimatedBox
      borderRadius="sm"
      style={[
        styles.underline,
        { backgroundColor: theme.colors.primary },
        animatedStyles,
      ]}
    />
  )
}

const styles = StyleSheet.create({
  underline: {
    position: "absolute",
    left: 0,
    bottom: 10,
    width: 100,
    height: 5,
  },
})

export { TabsIndicator }
