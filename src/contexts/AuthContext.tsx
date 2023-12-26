import { createContext, useEffect, useState } from "react";

import { UserDTO } from "@dtos/index";
import { api } from "@services/api";

import { getUser, saveUser } from "@storage/storageUser";

export type AuthContextDataProps = {
  user: UserDTO;

  signIn: (email: string, password: string) => Promise<void>;

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

  const signIn = async (email: string, password: string) => {
    try {
      const { data } = await api.post("/sessions", { email, password });

      if (data.user) {
        setUser(data.user);
        saveUser(data.user);
      }
    } catch (error) {
      throw error;
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
        isLoadingStoredUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
