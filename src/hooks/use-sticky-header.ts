import { Theme } from "@/themes/dark"
import { useTheme } from "@shopify/restyle"
import { useState } from "react"
import {
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ViewStyle,
} from "react-native"
import {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated"
import { useSafeAreaInsets } from "react-native-safe-area-context"

interface ReturnType {
  handleLayout: (e: LayoutChangeEvent) => void
  handleScroll: (e: NativeSyntheticEvent<NativeScrollEvent>) => void
  headerBarHeight: number
  animatedStyle: ViewStyle
}

const useStickyHeader = (): ReturnType => {
  const theme = useTheme<Theme>()
  const { top } = useSafeAreaInsets()
  const yTranslation = useSharedValue(top)
  const yOffset = useSharedValue(0)
  const [headerBarHeight, setHeaderBarHeight] = useState(0)

  const minY = -headerBarHeight
  const maxY = top + theme.spacing.md

  const handleScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset }) => {
      const scrollY = contentOffset.y

      const delta = scrollY - yOffset.value

      if (delta > 0) {
        yTranslation.value = Math.max(minY, yTranslation.value - delta)
      } else {
        yTranslation.value = Math.min(maxY, yTranslation.value - delta)
      }

      yOffset.value = scrollY
    },
  })

  const handleLayout = (event: LayoutChangeEvent): void => {
    const { height } = event.nativeEvent.layout
    setHeaderBarHeight(height)
  }

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: yTranslation.value }],
    }
  })

  return {
    handleLayout,
    handleScroll,
    headerBarHeight,
    animatedStyle,
  }
}

export { useStickyHeader }
