import { ScreensRoot } from "@/screens"
import { theme } from "@/themes/dark"
import { setup } from "@/utils/setup"
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet"
import { NavigationContainer } from "@react-navigation/native"
import { ThemeProvider } from "@shopify/restyle"
import { StatusBar } from "expo-status-bar"
import { IntlProvider } from "react-intl"
import { StyleSheet } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { SafeAreaProvider } from "react-native-safe-area-context"
import messages from "./i18n/en.json"
import "./polyfill"

const App: React.FC = () => {
  setup()

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <IntlProvider locale={"en"} messages={messages}>
          <ThemeProvider theme={theme}>
            <BottomSheetModalProvider>
              <GestureHandlerRootView style={styles.gestureRoot}>
                <ScreensRoot />

                <StatusBar hidden />
              </GestureHandlerRootView>
            </BottomSheetModalProvider>
          </ThemeProvider>
        </IntlProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  gestureRoot: {
    flex: 1,
  },
})

export { App }
