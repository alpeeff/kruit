import { useCallback, useState } from "react"

interface IUseFocus {
  isFocused: boolean
  onFocus: () => void
  onBlur: () => void
}

const useFocus = ({
  onFocus,
  onBlur,
}: Partial<Omit<IUseFocus, "isFocused">> = {}): IUseFocus => {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = useCallback(() => {
    if (onFocus) {
      onFocus()
    }

    setIsFocused(true)
  }, [])

  const handleBlur = useCallback(() => {
    if (onBlur) {
      onBlur()
    }

    setIsFocused(false)
  }, [])

  return {
    isFocused,
    onFocus: handleFocus,
    onBlur: handleBlur,
  }
}

export { useFocus }
