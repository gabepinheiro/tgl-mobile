import { StyleSheet } from "react-native"
import Toast from "react-native-root-toast"
import { theme } from "~/styles"

const toastSettingsDefault = {
  position: Toast.positions.TOP,
  opacity: 1,
  shadow: true,
  animation: true,
  hideOnPress: true,
}

export const CustomToast = {
  success: (message: string) => (
    Toast.show(message, {
      ...toastSettingsDefault,
      textStyle: [styles.textBase, styles.textSuccess],
      containerStyle: [
        styles.borderBase,
        styles.toast,
        styles.borderSuccess
      ]
    })
  ),
  error: (message: string) => (
    Toast.show(message, {
      ...toastSettingsDefault,
      textStyle: [styles.textBase, styles.textError],
      containerStyle: [styles.borderBase,
        styles.toast,
        styles.borderError
      ]
    })
  ),
}

const styles = StyleSheet.create({
  toast: {
    backgroundColor: '#fff'
  },
  textBase: {
    fontFamily: theme.font.bold
  },
  textSuccess: {
    color: theme.colors.green
  },
  borderBase: {
    borderLeftWidth: 4,
    borderRadius: 0
  },
  borderSuccess: {
    borderColor: theme.colors.green
  },
  textError: {
    color: 'red'
  },
  borderError: {
    borderColor: 'red'
  },
})

