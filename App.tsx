import { StatusBar, Text, View } from "react-native";
import { NativeBaseProvider } from "native-base";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  if (fontsLoaded)
    return (
      <NativeBaseProvider>
        <StatusBar
          backgroundColor="#202024"
          translucent
          barStyle="light-content"
        />

        {fontsLoaded ? <Text>Hello World!</Text> : <View />}
      </NativeBaseProvider>
    );
}
