import { createContext, useEffect, useState } from "react";

import { UserDTO } from "@dtos/index";
import { api } from "@services/api";

import { getUser, removeUser, saveUser } from "@storage/storageUser";
import {
  getAuthToken,
  removeAuthToken,
  saveAuthToken,
} from "@storage/storageAuthToken";

export type AuthContextDataProps = {
  user: UserDTO;

  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;

  isLoadingStoredUser: boolean;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>({
  user: {},
} as AuthContextDataProps);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState({} as UserDTO);

  const [isLoadingStoredUser, setIsLoadingStoredUser] = useState(true);

  const updateUserAndToken = (userData: UserDTO, token: string) => {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    setUser(userData);
  };

  const saveUserAndToken = async (userData: UserDTO, token: string) => {
    try {
      setIsLoadingStoredUser(true);

      await saveUser(userData);
      await saveAuthToken(token);
    } catch (error) {
      throw error;
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const { data } = await api.post("/sessions", { email, password });

      if (data.user && data.token) {
        await saveUserAndToken(data.user, data.token);
        updateUserAndToken(data.user, data.token);
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingStoredUser(false);
    }
  };

  const signOut = async () => {
    try {
      setIsLoadingStoredUser(true);

      setUser({} as UserDTO);

      await removeUser();
      await removeAuthToken();
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingStoredUser(false);
    }
  };

  const loadUserData = async () => {
    try {
      setIsLoadingStoredUser(true);

      const loggedUser = await getUser();
      const token = await getAuthToken();

      if (loggedUser && token) setUser(loggedUser);
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingStoredUser(false);
    }
  };

  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,

        signIn,
        signOut,

        isLoadingStoredUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
