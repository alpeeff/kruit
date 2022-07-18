import { useEffect, useRef } from "react"

const usePrev = <T>(value: T): T | undefined => {
  const prev = useRef<T | undefined>()

  useEffect(() => {
    prev.current = value
  }, [value])

  return prev.current
}

export { usePrev }
