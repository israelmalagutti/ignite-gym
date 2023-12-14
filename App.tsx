import { StatusBar, Text, View } from "react-native";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  if (fontsLoaded)
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#202024",
        }}
      >
        {fontsLoaded ? <Text>Hello World!</Text> : <View />}

        <StatusBar
          backgroundColor="#202024"
          translucent
          barStyle="light-content"
        />
      </View>
    );
}
