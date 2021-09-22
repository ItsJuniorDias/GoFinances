import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';

import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components'

import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'react-native';

import { 
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import theme from './src/global/styles/theme'
import Welcome from './src/screens/Welcome'
import Register from './src/screens/Register'
import CategorySelect from './src/screens/CategorySelect'

import { AppRoutes } from './src/routes/app.routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });
  
  if(!fontsLoaded) {
    return <AppLoading />
  }
  
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <AppRoutes  />
      </NavigationContainer>
    </ThemeProvider>
  );
}


