import 'react-native-gesture-handler';
import React from 'react';

import { Provider as StoreProvider } from 'react-redux'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper' 

import App from './src'
import store from './src/store'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#11c770',
  }
}

export default function Main() {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    </StoreProvider>
  );_
};


