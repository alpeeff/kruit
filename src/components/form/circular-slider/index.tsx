import { Box } from "@/atoms"
import { CircularSlider_Cursor } from "@/components/form/circular-slider/cursor"
import { CircularSlider_Gesture } from "@/components/form/circular-slider/gesture"
import {
  absoluteDuration,
  CENTER,
  R,
  SIZE,
  STROKE,
} from "@/components/form/circular-slider/utils"
import React from "react"
import Animated, {
  SharedValue,
  useAnimatedProps,
  useDerivedValue,
} from "react-native-reanimated"
import { polar2Canvas } from "react-native-redash"
import Svg, { Path } from "react-native-svg"

const AnimatedPath = Animated.createAnimatedComponent(Path)

interface Props {
  start: SharedValue<number>
  end: SharedValue<number>
}

const CircularSlider: React.FC<Props> = ({ start, end }) => {
  const startPos = useDerivedValue(() =>
    polar2Canvas({ theta: start.value, radius: R }, CENTER)
  )
  const endPos = useDerivedValue(() =>
    polar2Canvas({ theta: end.value, radius: R }, CENTER)
  )

  const animatedProps = useAnimatedProps(() => {
    const duration = absoluteDuration(start.value, end.value)

    return {
      d: `M${startPos.value.x} ${startPos.value.y} A${R} ${R} 0 ${
        duration < Math.PI ? "0" : "1"
      } 0 ${endPos.value.x} ${endPos.value.y}`,
    }
  })

  return (
    <Box alignItems="center">
      <Box>
        <Svg width={SIZE} height={SIZE}>
          <AnimatedPath
            animatedProps={animatedProps}
            strokeWidth={STROKE}
            stroke="cyan"
          />

          <CircularSlider_Cursor pos={startPos} />
          <CircularSlider_Cursor pos={endPos} />
        </Svg>

        <CircularSlider_Gesture
          start={start}
          end={end}
          endPos={endPos}
          startPos={startPos}
        />
      </Box>
    </Box>
  )
}

export { CircularSlider }
