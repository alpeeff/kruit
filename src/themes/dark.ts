import { createTheme } from "@shopify/restyle"

const palette = {
  purplePrimary: "#8446f1",

  grayLight: "#777777",
  grayPrimary: "#333333",
  grayDark: "#282828",

  black: "#121212",
  orange: "#fe7763",
  blue: "#1675c6",
  white: "#ffffff",
}

const theme = createTheme({
  colors: {
    mainBackground: palette.black,
    mainForeground: palette.grayDark,
    cardBackground: palette.grayPrimary,

    primary: palette.purplePrimary,
    secondary: palette.orange,
    white: palette.white,
    textSecondary: palette.grayLight,
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 40,
    xxl: 60,
  },

  breakpoints: {
    phone: 0,
    tablet: 768,
  },

  textVariants: {
    defaults: {
      fontSize: 16,
      lineHeight: 14 * 1.4,
      color: "white",
    },
  },

  borderRadii: {
    sm: 8,
    md: 14,
    lg: 20,
    xl: 40,
  },
})

export type Theme = typeof theme
export { theme }
