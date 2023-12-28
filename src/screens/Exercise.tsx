import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import { api } from "@services/api";
import { ExerciseDTO } from "@dtos/ExercsieDTO";

import { AppError } from "@utils/AppError";

import { Button, Loading } from "@components/index";
import {
  Box,
  HStack,
  Heading,
  Icon,
  Image,
  ScrollView,
  Text,
  VStack,
  useToast,
} from "native-base";

import RepsSvg from "@assets/repetitions.svg";
import SetsSvg from "@assets/series.svg";
import BodySvg from "@assets/body.svg";

type RouteParams = {
  exerciseId: string;
};

const TOAST_DURATION_MS = 2500;

export function Exercise() {
  const [exercise, setExercise] = useState<ExerciseDTO>({} as ExerciseDTO);

  const [isLoading, setIsLoading] = useState(true);

  const Toast = useToast();

  const navigation = useNavigation();

  const route = useRoute();
  const { exerciseId } = route.params as RouteParams;

  const fetchExercise = async () => {
    try {
      const response = await api.get(`/exercises/${exerciseId}`);
      setExercise(response.data);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Sorry, we couldn't get the exercise details. Try again later.";

      if (isAppError)
        Toast.show({
          placement: "top",
          duration: TOAST_DURATION_MS,
          title,
          bg: "red.500",
        });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchExercise();
  }, [exerciseId]);

  return (
    <VStack flex={1} style={{ gap: 32 }}>
      <VStack px={8} pt={12} pb={8} bg="gray.600" style={{ gap: 16 }}>
        <TouchableOpacity onPress={navigation.goBack}>
          <Icon as={Feather} name="arrow-left" color="green.500" />
        </TouchableOpacity>

        <HStack alignItems="center" justifyContent="space-between">
          <Heading
            numberOfLines={2}
            flexShrink={1}
            color="gray.100"
            fontSize="lg"
          >
            {exercise.name}
          </Heading>

          <HStack alignItems="center" style={{ gap: 4 }}>
            <BodySvg />
            <Text color="gray.200" textTransform="capitalize">
              {exercise.group}
            </Text>
          </HStack>
        </HStack>
      </VStack>

      {isLoading ? (
        <Loading />
      ) : (
        <ScrollView>
          <VStack
            alignItems="center"
            justifyContent="center"
            px={8}
            style={{ gap: 12 }}
          >
            <Box rounded="lg" bg="gray.600" overflow="hidden">
              <Image
                resizeMode="cover"
                source={{
                  uri: `${api.defaults.baseURL}/exercise/demo/${exercise?.demo}`,
                }}
                alt="Exercise name"
                _alt={{ color: "gray.100" }}
                w="full"
                h={80}
              />
            </Box>

            <Box
              w="full"
              px={8}
              pt={5}
              pb={4}
              bg="gray.600"
              rounded="lg"
              style={{ gap: 24 }}
            >
              <HStack alignItems="center" justifyContent="space-around">
                <HStack style={{ gap: 8 }}>
                  <SetsSvg />
                  <Text color="white">{exercise.series} séries</Text>
                </HStack>

                <HStack style={{ gap: 8 }}>
                  <RepsSvg />
                  <Text color="white">{exercise.repetitions} repetições</Text>
                </HStack>
              </HStack>

              <Button title="Complete exercise"></Button>
            </Box>
          </VStack>
        </ScrollView>
      )}
    </VStack>
  );
}
