import { Box, Center, Heading, Image, Text, VStack } from "native-base";

import { Input } from "@components/Input";

import BackgroundImg from "@assets/background.png";
import LogoSvg from "@assets/logo.svg";
import { Button } from "@components/index";

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

      <Center flex={1} width="100%" gap={4}>
        <Heading color="gray.100" fontSize="xl" mb={6}>
          Acesse sua conta
        </Heading>

        <Box width="100%" gap={4} px={10}>
          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Input placeholder="Password" secureTextEntry />

          <Button title="Log in" />
        </Box>
      </Center>

      <Center width="100%" gap={3} px={10} pb={8}>
        <Text color="gray.100" fontSize="sm" fontFamily="body">
          Ainda não tem uma conta?
        </Text>

        <Button title="Create account" variant="outline" />
      </Center>
    </VStack>
  );
}
