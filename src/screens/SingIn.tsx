import { Image, VStack } from "native-base";

import BackgroundImg from "@assets/background.png";

export function SignIn() {
  return (
    <VStack flex={1}>
      <Image
        resizeMode="contain"
        position={"absolute"}
        source={BackgroundImg}
        alt="People working out"
      />
    </VStack>
  );
}
