import { createContext, useEffect, useState } from "react";

import { UserDTO } from "@dtos/index";
import { api } from "@services/api";

import { getUser, removeUser, saveUser } from "@storage/storageUser";

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
  const [token, setToken] = useState();

  const [isLoadingStoredUser, setIsLoadingStoredUser] = useState(true);

  const signIn = async (email: string, password: string) => {
    try {
      const { data } = await api.post("/sessions", { email, password });

      if (data.user && data.token) {
        setUser(data.user);

        saveUser(data.user);
      }
    } catch (error) {
      throw error;
    }
  };

  const signOut = async () => {
    try {
      setIsLoadingStoredUser(true);

      await removeUser();
      setUser({} as UserDTO);
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingStoredUser(false);
    }
  };

  const loadUserData = async () => {
    try {
      const loggedUser = await getUser();

      if (loggedUser) setUser(loggedUser);
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
