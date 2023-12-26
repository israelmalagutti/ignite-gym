import AsyncStorage from "@react-native-async-storage/async-storage";

import { UserDTO } from "@dtos/index";
import { USER_STORAGE } from "./storageConfig";

export const saveUser = async (user: UserDTO) => {
  try {
    await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user));
  } catch (error) {
    throw error;
  }
};
