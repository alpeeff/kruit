import { CENTER, SIZE } from "@/components/svg-course"
import { Line } from "react-native-svg"

const Lesson_1_3: React.FC = () => {
  return (
    <>
      <Line
        x1={0}
        y1={0}
        x2={CENTER.x}
        y2={CENTER.y}
        strokeWidth={4}
        stroke="blue"
      />

      <Line
        x1={CENTER.x}
        y1={CENTER.y}
        x2={0}
        y2={SIZE}
        strokeWidth={4}
        stroke="green"
      />

      <Line
        x1={"50%"}
        y1={"50%"}
        x2={"100%"}
        y2={"0%"}
        stroke="violet"
        strokeWidth={4}
      />
    </>
  )
}

export { Lesson_1_3 }
