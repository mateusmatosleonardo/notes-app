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
import { Loading } from './src/components/Loading/Loading';
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
        <StatusBar style="auto" backgroundColor='#fafafa' />
      </ThemeProvider>
    </React.Fragment>
  );
}

