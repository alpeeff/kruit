import { Vector } from "react-native-redash"

export const SIZE = 300
export const STROKE = 50
export const R = (SIZE - STROKE) / 2
export const CENTER = { x: SIZE / 2, y: SIZE / 2 }
export const TAU = Math.PI * 2

export const absoluteDuration = (start: number, end: number): number => {
  "worklet"
  return start > end ? end + (TAU - start) : end - start
}

export const containedInSquare = (
  value: Vector,
  center: Vector,
  side: number
): boolean => {
  "worklet"
  const topLeft = { x: center.x - side / 2, y: center.y - side / 2 }
  return (
    value.x >= topLeft.x &&
    value.x <= topLeft.x + side &&
    value.y >= topLeft.y &&
    value.y <= topLeft.y + side
  )
}
