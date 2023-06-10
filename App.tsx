import 'react-native-reanimated';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/routes/Routes';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold
} from '@expo-google-fonts/inter';
import { PasswordContextProvider } from './src/context/Password/provider';
import { Loading } from './src/components/Loading/Loading';
import FlashMessage from 'react-native-flash-message';
import { theme } from './src/theme/theme';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold
  });

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Routes />
        <StatusBar style="auto" backgroundColor='#679ad8' />
        <FlashMessage position="top" />
      </ThemeProvider>
    </React.Fragment>
  );
}

