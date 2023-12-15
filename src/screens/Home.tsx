import { useNavigation } from "@react-navigation/native";

import { Center, Text, VStack } from "native-base";
import { HomeHeader } from "@components/index";

// import {} from "";

export function Home() {
  return (
    <VStack flex={1}>
      <HomeHeader />

      <Text color="gray.100">Hello Home</Text>
    </VStack>
  );
}
