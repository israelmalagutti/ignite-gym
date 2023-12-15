import { StatusBar, Text } from "react-native";
import { NativeBaseProvider } from "native-base";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { THEME } from "./src/theme";

import { Routes } from "@routes/index";

import { Loading } from "@components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        backgroundColor="#00000000"
        translucent
        barStyle="light-content"
      />

      {fontsLoaded ? <Routes /> : <Loading />}
    </NativeBaseProvider>
  );
}
