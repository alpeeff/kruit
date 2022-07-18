import { Box } from "@/atoms"
import Svg, { Path } from "react-native-svg"

export const SIZE = 400 as const
export const CENTER = { x: SIZE / 2, y: SIZE / 2 }

const SvgCourse: React.FC = () => {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Svg width={SIZE} height={SIZE}>
        <Path d={`M0 0 H${SIZE} V${SIZE} H0 Z`} stroke="red" strokeWidth={3} />

        {/* Paste Here Lesson */}
      </Svg>
    </Box>
  )
}

export { SvgCourse }
