import { ComponentProps, ReactNode } from "react"
import { FormatDateOptions, FormattedMessage, useIntl } from "react-intl"

type ValuesType = ComponentProps<typeof FormattedMessage>["values"]
type DateFormat = "date"

interface ReturnType {
  locale: string
  t: (id: string, values?: ValuesType) => string | ReactNode
  formatDate: (date: number, format?: DateFormat) => string
}

const useI18n = (): ReturnType => {
  const { locale, formatMessage, formatDate } = useIntl()

  return {
    locale,

    t: (id, values) => formatMessage({ id }, values),

    formatDate: (value, format): string => {
      let opts: FormatDateOptions = {}

      if (format === "date") {
        opts = {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }
      }

      return formatDate(value, opts)
    },
  }
}

export { useI18n }
