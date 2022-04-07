import AsyncStorage from '@react-native-async-storage/async-storage'

export const Storage = {
  async setItem(key: string, value: any) {
    await AsyncStorage.setItem(key, JSON.stringify(value))
  },

  async getItem<T>(key: string): Promise<T | null> {
    const value = await AsyncStorage.getItem(key)

    if(value) {
      return JSON.parse(value)
    }

    return null
  }
}
