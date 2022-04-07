import AsyncStorage from '@react-native-async-storage/async-storage'

export const Storage = {
  async setItem(key: string, value: any) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value))
    } catch (error) {}
  },

  async getItem<T>(key: string): Promise<T | null> {
    try {
      const value = await AsyncStorage.getItem(key)

      if(value) {
        return JSON.parse(value)
      }

    } catch (error) {}

    return null
  },

  async removeItem (key: string) {
    try {
      await AsyncStorage.removeItem(key)
    } catch (error) {}
  }
}
