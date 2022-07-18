import { AnimatedBox, BaseButton } from "@/atoms"
import { Theme } from "@/themes/dark"
import { SpacingProps, useTheme } from "@shopify/restyle"
import { useEffect } from "react"
import { LayoutChangeEvent, Vibration } from "react-native"
import { Gesture, GestureDetector } from "react-native-gesture-handler"
import {
  interpolateColor,
  runOnJS,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated"

const CURSOR_SIZE = 25
const CURSOR_SIZE_PRESSED = CURSOR_SIZE * 1.3
const CURSOR_SIZE_DIFF = CURSOR_SIZE_PRESSED - CURSOR_SIZE
const VIBRRATION_PATTERN = 50
const PADDING: SpacingProps<Theme>["padding"] = "xs"

interface Props {
  value: boolean
  onChange: (value: boolean) => void
}

const Switch: React.FC<Props> = ({ value, onChange }) => {
  const theme = useTheme<Theme>()
  const constraintX = useSharedValue({ start: 0, end: 0 })
  const isPressed = useSharedValue(false)
  const isActive = useDerivedValue(() => (value ? 1 : 0))
  const isActiveTiming = useDerivedValue(() => withTiming(isActive.value))
  const isAnimating = useSharedValue(false)

  const handleChange = (): void => {
    onChange(!value)
  }

  const gesture = Gesture.Pan()
    .onBegin(() => {
      isPressed.value = true
    })
    .onUpdate(({ translationX }) => {
      const dragged = isActive.value ? -translationX : translationX

      if (dragged > CURSOR_SIZE / 2 && !isAnimating.value) {
        isAnimating.value = true
        runOnJS(handleChange)()
      }
    })
    .onFinalize(() => {
      isPressed.value = false
    })

  const handleLayout = (e: LayoutChangeEvent): void => {
    const layout = e.nativeEvent.layout

    constraintX.value = {
      start: 0,
      end: layout.width - CURSOR_SIZE - theme.spacing[PADDING] * 2,
    }
  }

  const animatedSliderStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      isActiveTiming.value,
      [0, 1],
      [theme.colors.secondary, theme.colors.primary]
    )

    return {
      backgroundColor,
    }
  })

  const animatedCursorStyle = useAnimatedStyle(() => {
    const pos = isActive.value ? constraintX.value.end : constraintX.value.start

    return {
      width: withTiming(isPressed.value ? CURSOR_SIZE_PRESSED : CURSOR_SIZE),
      transform: [
        {
          translateX: withTiming(
            isActive.value && isPressed.value ? pos - CURSOR_SIZE_DIFF : pos,
            undefined,
            () => {
              isAnimating.value = false
            }
          ),
        },
      ],
    }
  })

  useEffect(() => {
    Vibration.vibrate(VIBRRATION_PATTERN)
  }, [value])

  return (
    <BaseButton onPress={handleChange} activeOpacity={1}>
      <AnimatedBox
        style={animatedSliderStyle}
        width={CURSOR_SIZE * 2.8}
        borderRadius="xl"
        padding={PADDING}
        flexDirection="row"
        alignItems="center"
        onLayout={handleLayout}
      >
        <GestureDetector gesture={gesture}>
          <AnimatedBox
            style={animatedCursorStyle}
            width={CURSOR_SIZE}
            height={CURSOR_SIZE}
            borderRadius="lg"
            backgroundColor="white"
          />
        </GestureDetector>
      </AnimatedBox>
    </BaseButton>
  )
}

export { Switch }
