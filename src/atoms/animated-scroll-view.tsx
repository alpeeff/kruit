import { Theme } from "@/themes/dark"
import { createBox } from "@shopify/restyle"
import { ScrollViewProps } from "react-native"
import Animated from "react-native-reanimated"

const AnimatedScrollView = createBox<Theme, ScrollViewProps>(
  Animated.ScrollView
)

export default AnimatedScrollView
