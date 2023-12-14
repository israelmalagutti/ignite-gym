import { StatusBar, Text } from "react-native";
import { Box, NativeBaseProvider } from "native-base";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { THEME } from "./src/theme";

import { Loading } from "@components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        backgroundColor="#202024"
        translucent
        barStyle="light-content"
      />

      <Box flex={1} bgColor="gray.600">
        {!fontsLoaded ? <Text>Hello World!</Text> : <Loading />}
      </Box>
    </NativeBaseProvider>
  );
}
