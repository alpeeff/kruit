import { BaseIconProps } from "@/icons/types"
import * as React from "react"
import Svg, { Path } from "react-native-svg"

const IconGym: React.FC<BaseIconProps> = ({ width, height, fill = "#fff" }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 512 512">
      <Path
        d="M30.183 151.899C13.54 151.899 0 165.439 0 182.082v147.835C0 346.56 13.54 360.1 30.183 360.1h20.253V151.899H30.183zm386.981-31.489h-65.84c-16.643 0-30.183 13.54-30.183 30.183v87.293H190.858v-87.293c0-16.643-13.54-30.183-30.182-30.183h-65.84c-16.643 0-30.183 13.54-30.183 30.183v210.814c0 16.643 13.54 30.183 30.183 30.183h65.84c16.643 0 30.182-13.54 30.182-30.183v-87.301h130.283v87.301c0 16.643 13.54 30.183 30.183 30.183h65.84c16.643 0 30.183-13.54 30.183-30.183V150.593c0-16.643-13.539-30.183-30.183-30.183zm64.653 31.489h-20.253v208.202h20.253c16.643 0 30.183-13.54 30.183-30.183V182.082c0-16.643-13.54-30.183-30.183-30.183z"
        fill={fill}
      />
    </Svg>
  )
}

export { IconGym }
