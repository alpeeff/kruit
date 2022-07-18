import { BaseIconProps } from "@/icons/types"
import * as React from "react"
import Svg, { Path } from "react-native-svg"

const IconPause: React.FC<BaseIconProps> = ({
  width,
  height,
  fill = "#fff",
}) => {
  return (
    <Svg viewBox="0 0 47.607 47.607" width={width} height={height}>
      <Path
        d="M17.991 40.976a6.631 6.631 0 01-13.262 0V6.631a6.631 6.631 0 0113.262 0v34.345zm24.886 0a6.631 6.631 0 01-13.262 0V6.631a6.631 6.631 0 0113.262 0v34.345z"
        fill={fill}
      />
    </Svg>
  )
}

export { IconPause }
