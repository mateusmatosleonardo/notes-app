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
import { PasswordAppContextProvider } from './src/context/PasswordApp/provider';
import { Loading } from './src/components/Loading/Loading';
import FlashMessage from 'react-native-flash-message';

export default function App() {

  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold
  });

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <React.Fragment>
      <PasswordAppContextProvider>
        <Routes />
      </PasswordAppContextProvider>
      <StatusBar style="auto" />
      <FlashMessage position="top" />
    </React.Fragment>
  );
}

