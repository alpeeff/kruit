import { STROKE } from "@/components/form/circular-slider/utils"
import Animated, {
  SharedValue,
  useAnimatedProps,
} from "react-native-reanimated"
import { Vector } from "react-native-redash"
import { Circle } from "react-native-svg"

const AnimatedCircle = Animated.createAnimatedComponent(Circle)

const CircularSlider_Cursor: React.FC<{ pos: SharedValue<Vector> }> = ({
  pos,
}) => {
  const animatedProps = useAnimatedProps(() => {
    return {
      cx: pos.value.x,
      cy: pos.value.y,
    }
  })

  return (
    <AnimatedCircle animatedProps={animatedProps} r={STROKE / 2} fill="blue" />
  )
}

export { CircularSlider_Cursor }
