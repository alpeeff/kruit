import { Theme } from "@/themes/dark"
import { createBox } from "@shopify/restyle"
import Animated from "react-native-reanimated"

const AnimatedBox = createBox<Theme>(Animated.View)

export default AnimatedBox
