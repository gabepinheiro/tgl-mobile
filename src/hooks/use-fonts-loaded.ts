import {
  useFonts,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic
} from '@expo-google-fonts/roboto'

export const useFontsLoaded = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic
  })

  return {
    fontsLoaded
  }
}
