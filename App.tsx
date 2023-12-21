import { useEffect } from "react";
import { StatusBar } from "react-native";
import * as NavigationBar from "expo-navigation-bar";

import { NativeBaseProvider } from "native-base";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { THEME } from "./src/theme";

import { Routes } from "@routes/index";

import { Loading } from "@components/Loading";

import { AuthContext, AuthProvider } from "@contexts/index";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  const changeNavigationBarColor = async () =>
    await NavigationBar.setBackgroundColorAsync(THEME.colors.gray[600]);

  useEffect(() => {
    changeNavigationBarColor();
  }, []);

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        backgroundColor="#00000000"
        translucent
        barStyle="light-content"
      />

      <AuthProvider>{fontsLoaded ? <Routes /> : <Loading />}</AuthProvider>
    </NativeBaseProvider>
  );
}
