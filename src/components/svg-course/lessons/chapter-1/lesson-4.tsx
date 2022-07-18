import { Polygon, Polyline } from "react-native-svg"

const Lesson_1_4: React.FC = () => {
  return (
    <>
      <Polyline
        points="0,0 50,50 100,30 100,100 30,150"
        fill="blue"
        stroke="white"
      />

      <Polygon points="300,0 150,150 200,150" stroke="cyan" fill="red" />
    </>
  )
}

export { Lesson_1_4 }
