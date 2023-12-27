import AsyncStorage from "@react-native-async-storage/async-storage";

import { UserDTO } from "@dtos/index";
import { USER_STORAGE } from "@storage/storageConfig";

export const saveUser = async (user: UserDTO) => {
  try {
    await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user));
  } catch (error) {
    throw error;
  }
};

export const getUser = async () => {
  const storedUser = await AsyncStorage.getItem(USER_STORAGE);

  const user: UserDTO = storedUser ? JSON.parse(storedUser) : {};
  return user;
};

export const removeUser = async () => {
  await AsyncStorage.removeItem(USER_STORAGE);
};
