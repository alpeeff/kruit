import { AnimatedScrollView, Box } from "@/atoms"
import { TabsIndicator } from "@/components/tabs/lib/indicator"
import { ITab, Tab } from "@/components/tabs/lib/tab"
import { useEffect, useRef, useState } from "react"
import { View } from "react-native"
import { useSharedValue } from "react-native-reanimated"

interface Props {
  tabs: ITab[]
}

const Tabs: React.FC<Props> = ({ tabs }) => {
  const containerRef = useRef<View>(null)
  const refs = useRef<View[]>([])
  const [activeIndex, setActiveIndex] = useState(0)
  const [measures, setMeasures] = useState<{ x: number; width: number }[]>([])
  const sv = useSharedValue({ x: 0, width: 0 })

  const handleSelect = (selectIndex: number): void => {
    setActiveIndex(selectIndex)
  }

  const ActiveComponent = tabs[activeIndex].component

  useEffect(() => {
    const m: { x: number; width: number }[] = []

    refs.current.forEach((elem) => {
      // @ts-ignore
      elem.measureLayout(containerRef.current!, (x, _, width) => {
        m.push({ x, width })

        if (m.length === refs.current.length) {
          setMeasures(m)
        }
      })
    })
  }, [])

  useEffect(() => {
    if (measures.length) {
      sv.value = measures[activeIndex]
    }
  }, [activeIndex, measures])

  return (
    <>
      <Box ref={containerRef}>
        <AnimatedScrollView>
          <Box flexDirection="row" paddingBottom="md" marginBottom="md">
            {tabs.map((x, i) => (
              <Tab
                key={i}
                onRef={(ref): void => {
                  refs.current[i] = ref
                }}
                onSelect={(): void => handleSelect(i)}
                {...x}
              />
            ))}

            <TabsIndicator measure={sv} />
          </Box>
        </AnimatedScrollView>
      </Box>

      <ActiveComponent />
    </>
  )
}

export { Tabs }
