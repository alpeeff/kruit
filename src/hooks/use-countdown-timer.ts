import { useCallback, useEffect, useRef, useState } from "react"

interface FormattedDate {
  min: number
  sec: number
  remainInSeconds: number
}

type CountdownTimerType = Omit<FormattedDate, "remainInSeconds"> & {
  pause: boolean
  expired: boolean
  togglePause: () => void
  reset: () => void
}

/**
 *
 * @param {number} seconds Number of seconds to count.
 * @param {function} onExpire The function is called when time passes.
 */
const useCountdownTimer = (
  seconds: number,
  onExpire?: (reset: CountdownTimerType["reset"]) => void
): CountdownTimerType => {
  const [_seconds, _setSeconds] = useState(seconds)
  const [pause, setPause] = useState(true)
  const [expired, setExpired] = useState(false)
  const startDateRef = useRef(Date.now())
  const [formatted, setFormatted] = useState<FormattedDate>(() =>
    getFormattedDate(seconds, startDateRef.current)
  )

  const togglePause = (): void => {
    if (expired) {
      return
    }

    setPause((prev) => {
      if (prev) {
        _setSeconds(formatted.remainInSeconds)
      }

      return !prev
    })
  }

  const handleReset = useCallback((): void => {
    setPause(true)
    setExpired(false)
    setFormatted(getFormattedDate(seconds, Date.now()))
  }, [seconds])

  useEffect(() => {
    if (expired || pause) {
      return
    }

    startDateRef.current = Date.now()

    const interval = setInterval(() => {
      const remain = getFormattedDate(_seconds, startDateRef.current)

      if (Math.floor(remain.remainInSeconds) <= 0) {
        setExpired(true)
        clearInterval(interval)
        onExpire && onExpire(handleReset)
      }

      setFormatted(remain)
    }, 950)

    return (): void => {
      clearInterval(interval)
    }
  }, [expired, pause])

  // Resets on seconds change
  useEffect(() => {
    handleReset()
    _setSeconds(seconds)
  }, [seconds])

  return {
    sec: formatted.sec,
    min: formatted.min,
    reset: handleReset,
    pause,
    togglePause,
    expired,
  }
}

const getFormattedDate = (
  seconds: number,
  startDate: number
): FormattedDate => {
  const passedSeconds = (Date.now() - startDate) / 1000 // Seconds passed
  const remainInSeconds = seconds - passedSeconds // Seconds remained

  const min = Math.floor(remainInSeconds / 60)
  const sec = Math.floor(remainInSeconds % 60)

  return {
    min,
    sec,
    remainInSeconds,
  }
}

export { useCountdownTimer }
