import { StatusBar } from 'expo-status-bar'
import { Root } from '~/root'
import { RootSiblingParent } from 'react-native-root-siblings'
import { Provider as StoreProvider } from 'react-redux'
import { store } from '~/store'

import { ThemeProvider } from 'styled-components/native'
import { theme } from '~/styles'

export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      <StoreProvider store={store}>
        <ThemeProvider theme={theme}>
          <RootSiblingParent>
            <Root />
          </RootSiblingParent>
        </ThemeProvider>
      </StoreProvider>
    </>
  );
}
