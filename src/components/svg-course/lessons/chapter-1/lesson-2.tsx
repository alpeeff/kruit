import { Circle, Ellipse } from "react-native-svg"

const Lesson_1_2: React.FC = () => {
  return (
    <>
      <Circle
        cx={100}
        cy={100}
        r={30}
        fill="violet"
        stroke="white"
        strokeWidth={4}
      />

      <Circle
        cx={"75%"}
        cy={"15%"}
        r={30}
        fill="#FF9308"
        stroke="#51C2FF"
        strokeWidth={4}
      />

      <Ellipse
        cx={100}
        cy={"75%"}
        rx={30}
        ry={40}
        fill="#FFFC19"
        stroke="#0971B2"
        strokeWidth={4}
      />

      <Ellipse
        cx={"75%"}
        cy={"50%"}
        rx={"20%"}
        ry={"10%"}
        fill="red"
        stroke="#00FF48"
      />
    </>
  )
}

export { Lesson_1_2 }
