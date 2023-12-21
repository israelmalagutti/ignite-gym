import { useNavigation } from "@react-navigation/native";

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { api } from "@services/api";

import { Button, Input } from "@components/index";
import {
  Box,
  Center,
  Heading,
  Image,
  ScrollView,
  Text,
  VStack,
  useToast,
} from "native-base";

import BackgroundImg from "@assets/background.png";
import LogoSvg from "@assets/logo.svg";
import { AppError } from "@utils/AppError";

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const signUpSchema = z
  .object({
    name: z.string({ required_error: "The name is required." }),
    email: z
      .string({ required_error: "The email is required." })
      .email("Invalid email."),
    password: z
      .string({ required_error: "The password is required." })
      .min(6, "The password must have at least 6 digits"),
    confirmPassword: z.string({
      required_error: "You must confirm your password to continue.",
    }),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "The passwords must match.",
    path: ["confirmPassword"],
  });

const TOAST_DURATION_MS = 2500;

export function SignUp() {
  const Toast = useToast();

  const { control, handleSubmit, formState } = useForm<FormDataProps>({
    resolver: zodResolver(signUpSchema),
  });

  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const handleSignIn = () => {
    navigation.goBack();
  };

  const handleSignUp = async ({ email, name, password }: FormDataProps) => {
    try {
      const response = await api.post("/userssada", { email, name, password });
      console.log(response);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "We couldn't create your account. Please try again later.";

      isAppError &&
        Toast.show({
          placement: "top",
          duration: TOAST_DURATION_MS,
          title,
          bg: "red.600",
        });
    }
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
            Create your account
          </Heading>

          <Box width="100%" gap={4}>
            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <Input
                  placeholder="Name"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={field.value}
                  onChangeText={field.onChange}
                  errorMessage={formState.errors.name?.message}
                />
              )}
            />

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
                />
              )}
            />

            <Controller
              control={control}
              name="confirmPassword"
              render={({ field }) => (
                <Input
                  placeholder="Confirm password"
                  secureTextEntry
                  value={field.value}
                  onChangeText={field.onChange}
                  errorMessage={formState.errors.confirmPassword?.message}
                  returnKeyType="send"
                  onSubmitEditing={handleSubmit(handleSignUp)}
                />
              )}
            />

            <Button title="Sign up" onPress={handleSubmit(handleSignUp)} />
          </Box>
        </Center>

        <Button title="Log in" variant="outline" onPress={handleSignIn} />
      </VStack>
    </ScrollView>
  );
}
