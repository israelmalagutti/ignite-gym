import AsyncStorage from "@react-native-async-storage/async-storage";

import { AUTH_TOKEN_STORAGE } from "@storage/storageConfig";

export const saveAuthToken = async (token: string) => {
  try {
    await AsyncStorage.setItem(AUTH_TOKEN_STORAGE, token);
  } catch (error) {
    throw error;
  }
};

export const getAuthToken = async () => {
  try {
    const storedToken = await AsyncStorage.getItem(AUTH_TOKEN_STORAGE);
    return storedToken;
  } catch (error) {
    throw error;
  }
};
