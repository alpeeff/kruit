import { AnimatedBox, AnimatedScrollView, Box } from "@/atoms"
import { Input } from "@/components/form/input"
import { useStickyHeader } from "@/hooks/use-sticky-header"
import React from "react"
import { useSafeAreaInsets } from "react-native-safe-area-context"

const ScreensStatsMain: React.FC = () => {
  const { top } = useSafeAreaInsets()
  const { handleLayout, handleScroll, animatedStyle, headerBarHeight } =
    useStickyHeader()

  return (
    <>
      <AnimatedBox
        width={"100%"}
        flexDirection="row"
        position="absolute"
        paddingHorizontal="md"
        zIndex={1}
        style={animatedStyle}
        onLayout={handleLayout}
      >
        <Input value={""} onChange={(): void => {}} />
      </AnimatedBox>

      <Box backgroundColor="mainBackground">
        <AnimatedScrollView
          scrollEventThrottle={16}
          onScroll={handleScroll}
          bounces={false}
          paddingHorizontal="md"
          style={{ paddingTop: headerBarHeight + top + 50 }}
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <Box
              key={i}
              height={80}
              backgroundColor={"primary"}
              width="100%"
              mb="lg"
              borderRadius="md"
            />
          ))}
        </AnimatedScrollView>
      </Box>
    </>
  )
}

export { ScreensStatsMain }
