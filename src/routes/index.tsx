import { useContext } from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";

import { useAuth } from "@hooks/index";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

import { Box, useTheme } from "native-base";

export function Routes() {
  const userAuth = useAuth();

  const { colors } = useTheme();

  const theme = DefaultTheme;
  theme.colors.background = colors.gray[700];

  return (
    <Box flex={1} bgColor="gray.700">
      <NavigationContainer theme={theme}>
        {userAuth ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </Box>
  );
}
