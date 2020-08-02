import 'react-native-gesture-handler';
import React from 'react';
import { DefaultTheme ,Provider as PaperProvider } from 'react-native-paper' 

import App from './src'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#11c770',
  }
}

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );_
};


