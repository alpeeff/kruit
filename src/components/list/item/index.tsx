import { Box, Text } from "@/atoms"
import { useCountdownTimer } from "@/hooks/use-countdown-timer"
import { IconPause } from "@/icons/pause"
import { IconPlay } from "@/icons/play"
import { IconRepeat } from "@/icons/repeat"
import { useCallback, useEffect, useRef, useState } from "react"
import { TouchableOpacity, ViewProps } from "react-native"

export interface IListItem {
  id: string

  /**
   * Name of exercise
   */
  title: string

  /**
   * Time in seconds
   */
  time: number

  /**
   * Number of reps
   */
  reps: number

  /**
   * Number of rounds
   */
  rounds: number
}

const ListItem: React.FC<IListItem> = ({ title, time, reps, rounds }) => {
  const [_rounds, _setRounds] = useState(rounds)
  const { min, sec, togglePause, pause, expired, reset } =
    useCountdownTimer(time)
  const [finished, setFinished] = useState(false)

  const ref = useRef<ViewProps>(null)

  const handleReset = useCallback(() => {
    setFinished(false)
    _setRounds(rounds)
    reset()
  }, [rounds])

  useEffect(() => {
    if (!expired) {
      return
    }

    _setRounds((prev) => {
      if (prev > 1) {
        reset()
        return prev - 1
      }

      setFinished(true)
      return 0
    })
  }, [expired])

  return (
    <Box
      padding="md"
      borderRadius="md"
      backgroundColor="cardBackground"
      marginBottom="md"
      flexDirection="row"
      overflow="hidden"
      ref={ref}
    >
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        flex={1}
      >
        <Box flexDirection="row" alignItems="center">
          <Box marginRight="md" width={30}>
            <Text textAlign="center">{_rounds}</Text>
          </Box>

          <Box>
            <Text marginBottom="sm">
              {reps}x {title}
            </Text>

            <Text color="textSecondary">
              {min.toString().padStart(2, "0")}:
              {sec.toString().padStart(2, "0")}
            </Text>
          </Box>
        </Box>

        {finished ? (
          <TouchableOpacity onPress={handleReset} activeOpacity={0.6}>
            <IconRepeat width={20} height={20} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={togglePause} activeOpacity={0.6}>
            {pause ? (
              <IconPlay width={20} height={20} />
            ) : (
              <IconPause width={20} height={20} />
            )}
          </TouchableOpacity>
        )}
      </Box>
    </Box>
  )
}

export { ListItem }
