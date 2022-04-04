import { StatusBar } from 'expo-status-bar'
import { Root } from './src/root'

import { ThemeProvider } from 'styled-components/native'
import { theme } from './src/styles/theme'

export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      <ThemeProvider theme={theme}>
        <Root />
      </ThemeProvider>
    </>
  );
}
