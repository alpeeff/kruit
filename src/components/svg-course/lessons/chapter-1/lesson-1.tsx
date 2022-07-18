import { CENTER } from "@/components/svg-course"
import { Rect } from "react-native-svg"

const Lesson_1_1: React.FC = () => {
  return (
    <Rect
      x={CENTER.x - 50}
      y={CENTER.y - 50}
      rx={30}
      ry={30}
      width={100}
      height={100}
      fill="tomato"
    />
  )
}

export { Lesson_1_1 }
