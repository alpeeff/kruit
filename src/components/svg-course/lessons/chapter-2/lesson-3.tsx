import { CENTER } from "@/components/svg-course"
import { Path } from "react-native-svg"

const R = 100
const OVERSIZE = 0
const SWEEP_FLAG = 0
const LARGE_ARC_FLAG = 1
const X_AXIS_ROTATION = 45
const STROKE = 5

const Lesson_2_3: React.FC = () => {
  const d = `M${CENTER.x - R} 200`

  const ARC = `A${R + OVERSIZE} ${
    R + 40
  } ${X_AXIS_ROTATION} ${LARGE_ARC_FLAG} ${SWEEP_FLAG} ${CENTER.x + R} 200`

  return (
    <>
      <Path d={d + ARC} stroke="cyan" strokeWidth={STROKE} />
    </>
  )
}

export { Lesson_2_3 }
