import { BaseButton, Box } from "@/atoms"
import { IconCardio } from "@/icons/cardio"
import { IconGym } from "@/icons/gym"
import { Theme } from "@/themes/dark"
import { useTheme } from "@shopify/restyle"
import { useMemo } from "react"
import { StyleSheet } from "react-native"

interface Props {
  icon: "workout" | "cardio"
}

const TrainKind: React.FC<Props> = ({ icon }) => {
  const theme = useTheme<Theme>()

  const backgroundColor = useMemo(() => {
    switch (icon) {
      case "workout":
        return theme.colors.primary
      case "cardio":
        return theme.colors.secondary
    }
  }, [icon])

  return (
    <BaseButton
      marginRight="md"
      justifyContent="center"
      alignItems="center"
      width={100}
      height={100}
      activeOpacity={0.7}
    >
      <Box
        position="absolute"
        width="100%"
        height="100%"
        left={0}
        right={0}
        style={[styles.trainKind, { backgroundColor }]}
      />

      {icon === "workout" && (
        <IconGym width={40} height={40} fill={backgroundColor} />
      )}

      {icon === "cardio" && (
        <IconCardio width={40} height={40} fill={backgroundColor} />
      )}
    </BaseButton>
  )
}

export { TrainKind }

const styles = StyleSheet.create({
  trainKind: {
    borderRadius: 100 / 2,
    opacity: 0.3,
  },
})
