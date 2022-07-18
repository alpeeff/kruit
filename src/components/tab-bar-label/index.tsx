import { Theme } from "@/themes/dark"
import { useTheme } from "@shopify/restyle"
import { MotiView } from "moti"
import { StyleSheet } from "react-native"
import { Easing } from "react-native-reanimated"

const TabBarLabel: React.FC<{ focused: boolean }> = ({ focused }) => {
  const theme = useTheme<Theme>()

  return (
    <MotiView
      style={[styles.label, { backgroundColor: theme.colors.primary }]}
      animate={{ width: focused ? 7 : 0, height: focused ? 7 : 0 }}
      transition={{ type: "timing", easing: Easing.ease, duration: 100 }}
    />
  )
}

const styles = StyleSheet.create({
  label: {
    borderRadius: 5,
  },
})

export { TabBarLabel }
