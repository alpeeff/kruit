import {
  CENTER,
  containedInSquare,
  STROKE,
} from "@/components/form/circular-slider/utils"
import React from "react"
import { StyleSheet } from "react-native"
import { Gesture, GestureDetector } from "react-native-gesture-handler"
import Animated, { SharedValue, useSharedValue } from "react-native-reanimated"
import { canvas2Polar, Vector } from "react-native-redash"

enum Region {
  START,
  END,
}

const CircularSlider_Gesture: React.FC<{
  start: SharedValue<number>
  end: SharedValue<number>
  startPos: SharedValue<Vector>
  endPos: SharedValue<Vector>
}> = ({ startPos, endPos, start, end }) => {
  const region = useSharedValue<Region | undefined>(undefined)

  const gesture = Gesture.Pan()
    .onBegin(({ x, y }) => {
      const value = { x, y }

      if (
        containedInSquare(
          value,
          { x: startPos.value.x, y: startPos.value.y },
          STROKE
        )
      ) {
        region.value = Region.START
      } else if (
        containedInSquare(
          value,
          { x: endPos.value.x, y: endPos.value.y },
          STROKE
        )
      ) {
        region.value = Region.END
      } else {
        region.value = undefined
      }
    })
    .onUpdate(({ x, y }) => {
      const value = { x, y }

      if (region.value === Region.START) {
        const { theta } = canvas2Polar(value, CENTER)
        start.value = theta
      }

      if (region.value === Region.END) {
        const { theta } = canvas2Polar(value, CENTER)
        end.value = theta
      }
    })

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={StyleSheet.absoluteFill} />
    </GestureDetector>
  )
}

export { CircularSlider_Gesture }
