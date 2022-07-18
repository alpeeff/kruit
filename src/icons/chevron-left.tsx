import { BaseIconProps } from "@/icons/types"
import * as React from "react"
import Svg, { Path } from "react-native-svg"

const IconChevronLeft: React.FC<BaseIconProps> = ({
  width,
  height,
  fill = "#fff",
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M14.707 5.293a1 1 0 010 1.414L9.414 12l5.293 5.293a1 1 0 01-1.414 1.414l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 0z"
        fill={fill}
      />
    </Svg>
  )
}

export { IconChevronLeft }
