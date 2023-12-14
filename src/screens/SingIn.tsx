import { Center, Image, Text, VStack } from "native-base";

import BackgroundImg from "@assets/background.png";
import LogoSvg from "@assets/logo.svg";

export function SignIn() {
  return (
    <VStack flex={1}>
      <Image
        resizeMode="contain"
        position={"absolute"}
        source={BackgroundImg}
        alt="People working out"
      />

      <Center my={24}>
        <LogoSvg />
        <Text fontSize="sm" color="gray.100">
          Train your mind and your body
        </Text>
      </Center>
    </VStack>
  );
}
