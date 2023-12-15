import {
  Box,
  Center,
  Heading,
  Image,
  ScrollView,
  Text,
  VStack,
} from "native-base";

import { Input } from "@components/Input";

import BackgroundImg from "@assets/background.png";
import LogoSvg from "@assets/logo.svg";
import { Button } from "@components/index";

export function SignIn() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <VStack flex={1} justifyContent="space-between" py={8} px={10}>
        <Image
          resizeMode="contain"
          position={"absolute"}
          source={BackgroundImg}
          alt="People working out"
        />

        <Center>
          <LogoSvg />
          <Text fontSize="sm" color="gray.100">
            Train your mind and your body
          </Text>
        </Center>

        <Center width="100%" gap={4}>
          <Heading color="gray.100" fontSize="xl" mb={6}>
            Acesse sua conta
          </Heading>

          <Box width="100%" gap={4}>
            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Input placeholder="Password" secureTextEntry />

            <Button title="Log in" />
          </Box>
        </Center>

        <Center width="100%" gap={3}>
          <Text color="gray.100" fontSize="sm" fontFamily="body">
            Ainda não tem uma conta?
          </Text>

          <Button title="Create account" variant="outline" />
        </Center>
      </VStack>
    </ScrollView>
  );
}
