import { StatusBar } from 'expo-status-bar'
import { Root } from '~/root'

import { ThemeProvider } from 'styled-components/native'
import { theme } from '~/styles'

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
