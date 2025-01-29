import { View, Text } from 'react-native'
import React from 'react'
import { Stack, SplashScreen} from 'expo-router';
import '../global.css';
// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  return (
    <Stack>
      <Stack.Screen
        name='index'

      />
    </Stack>
  )
}