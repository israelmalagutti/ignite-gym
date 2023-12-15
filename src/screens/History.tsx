import { useNavigation } from "@react-navigation/native";

import { Center, Text, VStack } from "native-base";
import { ScreenHeader } from "@components/index";

export function History() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Exercise history" />

      <Center>
        <Text>Hello History</Text>
      </Center>
    </VStack>
  );
}
