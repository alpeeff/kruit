import {
  setBehaviorAsync,
  setPositionAsync,
  setVisibilityAsync,
} from "expo-navigation-bar"
import { Platform } from "react-native"

const setup = async (): Promise<void> => {
  try {
    // Setup navigation bar
    if (Platform.OS === "android") {
      await Promise.all([
        setPositionAsync("absolute"),
        setVisibilityAsync("hidden"),
        setBehaviorAsync("overlay-swipe"),
      ])
    }
  } catch (e) {}
}

export { setup }
