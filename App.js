import { StatusBar } from "expo-status-bar"
import { StyleSheet, useColorScheme } from "react-native"
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer
} from "@react-navigation/native"
import RootNavigator from "./src/navigators/RootNavigator"
import { useMemo } from "react"
import "react-native-gesture-handler"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet"
import { SafeAreaProvider } from "react-native-safe-area-context"
import Toast from "react-native-toast-message"

export default function App() {

  const colorScheme = useColorScheme()
  
  const theme = useMemo(
    () =>
      colorScheme === "dark"
        ? {
            ...DarkTheme,
            colors: {
              ...DarkTheme.colors,
              primary: "#fff",
              text: "#fff"
            }
          }
        : {
            ...DefaultTheme,
            colors: {
              ...DefaultTheme.colors,
              background: "#f5f5f5",
              text: "#191919",
              border: "#D9D9D9",
              primary: "#191919"
            }
          },
    [colorScheme]
  )

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <GestureHandlerRootView style={styles.container}>
        <NavigationContainer theme={theme}>
          <BottomSheetModalProvider>
            <RootNavigator />
          </BottomSheetModalProvider>
          <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
        </NavigationContainer>
      </GestureHandlerRootView>
      <Toast/>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
