import { BaseIconProps } from "@/icons/types"
import * as React from "react"
import Svg, { Path } from "react-native-svg"

const IconPlay: React.FC<BaseIconProps> = ({
  width,
  height,
  fill = "#fff",
}) => {
  return (
    <Svg width={width} height={height} viewBox="-32 0 512 512">
      <Path
        d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
        fill={fill}
      />
    </Svg>
  )
}

export { IconPlay }
