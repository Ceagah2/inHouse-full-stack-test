import React from 'react';
import { ActivityIndicator} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import Routes from './src/routes'
import {
  Poppins_300Light,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_800ExtraBold
  } from '@expo-google-fonts/poppins'
export default function App() {
    const [fontsLoaded] = useFonts({
      Poppins_300Light,
      Poppins_500Medium,
      Poppins_600SemiBold,
      Poppins_800ExtraBold
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />
  }
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Routes />
    </>
  )
}

