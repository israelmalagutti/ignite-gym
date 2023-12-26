import { DefaultTheme, NavigationContainer } from "@react-navigation/native";

import { useAuth } from "@hooks/index";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

import { Loading } from "@components/Loading";
import { Box, useTheme } from "native-base";

export function Routes() {
  const { user, isLoadingStoredUser } = useAuth();

  const { colors } = useTheme();

  const theme = DefaultTheme;
  theme.colors.background = colors.gray[700];

  if (isLoadingStoredUser) return <Loading />;

  return (
    <Box flex={1} bgColor="gray.700">
      <NavigationContainer theme={theme}>
        {user.id ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </Box>
  );
}
