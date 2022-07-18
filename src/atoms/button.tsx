import { Theme } from "@/themes/dark"
import { createBox } from "@shopify/restyle"
import { TouchableOpacity, TouchableOpacityProps } from "react-native"

const BaseButton = createBox<Theme, TouchableOpacityProps>(TouchableOpacity)

export default BaseButton
