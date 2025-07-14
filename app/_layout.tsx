import { useCallback } from "react"

import {
  CormorantGaramond_400Regular,
  CormorantGaramond_500Medium,
  CormorantGaramond_600SemiBold,
  CormorantGaramond_700Bold,
  useFonts,
} from '@expo-google-fonts/cormorant-garamond'
import { SplashScreen, Stack } from "expo-router"
import { SafeAreaView, StatusBar } from "react-native"

import "./global.css"

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    'cormorant-regular': CormorantGaramond_400Regular,
    'cormorant-medium': CormorantGaramond_500Medium,
    'cormorant-semiBold': CormorantGaramond_600SemiBold,
    'cormorant-bold': CormorantGaramond_700Bold,
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <StatusBar hidden />
      <Stack screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        animationDuration: 200,
        presentation: 'card',
      }} >
        <Stack.Screen
          name="index"
        />
      </Stack>
    </SafeAreaView>)
}
