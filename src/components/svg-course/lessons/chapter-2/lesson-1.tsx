import { CENTER } from "@/components/svg-course"
import { Path } from "react-native-svg"

const Lesson_2_1: React.FC = () => {
  return (
    <>
      <Path
        d={`M${CENTER.x} 50 l50 100 l100 50 l-100 50 l-50 100 l-50 -100 l-100 -50 l100 -50 z`}
        stroke="red"
        fill="blue"
        strokeWidth={10}
      />
    </>
  )
}

export { Lesson_2_1 }
