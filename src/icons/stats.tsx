import { BaseIconProps } from "@/icons/types"
import * as React from "react"
import Svg, { Path } from "react-native-svg"

const IconStats: React.FC<BaseIconProps> = ({
  width,
  height,
  fill = "#fff",
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 512 512">
      <Path
        d="M104 496H72a24 24 0 01-24-24V328a24 24 0 0124-24h32a24 24 0 0124 24v144a24 24 0 01-24 24zm224 0h-32a24 24 0 01-24-24V232a24 24 0 0124-24h32a24 24 0 0124 24v240a24 24 0 01-24 24zm112 0h-32a24 24 0 01-24-24V120a24 24 0 0124-24h32a24 24 0 0124 24v352a24 24 0 01-24 24zm-224 0h-32a24 24 0 01-24-24V40a24 24 0 0124-24h32a24 24 0 0124 24v432a24 24 0 01-24 24z"
        fill={fill}
      />
    </Svg>
  )
}

export { IconStats }
