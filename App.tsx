import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/routes/Routes';
import {
  useFonts,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold
} from '@expo-google-fonts/nunito';
import AppLoading from 'expo-app-loading';

export default function App() {

  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <React.Fragment>
      <Routes />
      <StatusBar style="auto" />
    </React.Fragment>
  );
}

