import { createContext } from "react";

import { UserDTO } from "@dtos/index";

export type AuthContextDataProps = {
  user: UserDTO;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>({
  user: {},
} as AuthContextDataProps);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  return (
    <AuthContext.Provider
      value={{
        user: {
          id: "1",
          name: "Israel",
          email: "example@example.com",
          avatar: "israel.png",
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
