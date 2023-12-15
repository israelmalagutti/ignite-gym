import { useNavigation } from "@react-navigation/native";

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import { Button, Input } from "@components/index";
import {
  Box,
  Center,
  Heading,
  Image,
  ScrollView,
  Text,
  VStack,
} from "native-base";

import BackgroundImg from "@assets/background.png";
import LogoSvg from "@assets/logo.svg";

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const handleSignUp = () => {
    navigation.navigate("signUp");
  };

  const submitSignIn = () => {};

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} justifyContent="space-between" px={10} py={16}>
        <Image
          resizeMode="contain"
          position={"absolute"}
          source={BackgroundImg}
          defaultSource={BackgroundImg}
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
            Log In
          </Heading>

          <Box width="100%" gap={4}>
            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Input placeholder="Password" secureTextEntry />

            <Button title="Log in" onPress={submitSignIn} />
          </Box>
        </Center>

        <Center width="100%" gap={3}>
          <Text color="gray.100" fontSize="sm" fontFamily="body">
            Ainda não tem uma conta?
          </Text>

          <Button
            title="Create account"
            variant="outline"
            onPress={handleSignUp}
          />
        </Center>
      </VStack>
    </ScrollView>
  );
}
