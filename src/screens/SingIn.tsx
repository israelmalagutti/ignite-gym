import { useNavigation } from "@react-navigation/native";

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

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
import { api } from "@services/api";

type FormData = {
  email: string;
  password: string;
};

const signInSchema = z.object({
  email: z
    .string({ required_error: "This field is required." })
    .email("Invalid email."),
  password: z.string({ required_error: "This field is required." }),
});

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const { control, formState, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(signInSchema),
  });

  const handleSignUp = () => {
    navigation.navigate("signUp");
  };

  const submitSignIn = async ({ email, password }: FormData) => {
    console.log(email, password);
  };

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
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <Input
                  placeholder="E-mail"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={field.value}
                  onChangeText={field.onChange}
                  errorMessage={formState.errors.email?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              render={({ field }) => (
                <Input
                  placeholder="Password"
                  secureTextEntry
                  value={field.value}
                  onChangeText={field.onChange}
                  errorMessage={formState.errors.password?.message}
                  returnKeyType="send"
                  onSubmitEditing={handleSubmit(submitSignIn)}
                />
              )}
            />

            <Button title="Log in" onPress={handleSubmit(submitSignIn)} />
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
