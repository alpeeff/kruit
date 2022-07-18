import { BaseIconProps } from "@/icons/types"
import * as React from "react"
import Svg, { Path } from "react-native-svg"

const IconRepeat: React.FC<BaseIconProps> = ({
  width,
  height,
  fill = "#fff",
}) => {
  return (
    <Svg width={width} height={height}>
      <Path
        d="M5.233.494a8 8 0 018.22 1.652l.84-.84c.63-.63 1.707-.184 1.707.707V6h-3.987c-.891 0-1.337-1.077-.707-1.707l.731-.732a6 6 0 101.378 7.024 1 1 0 011.805.861A8 8 0 115.233.494z"
        fill={fill}
      />
    </Svg>
  )
}

export { IconRepeat }
