import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { api } from "@services/api";
import { ExerciseDTO } from "@dtos/ExercsieDTO";

import { HStack, Heading, Icon, Image, Text, VStack } from "native-base";

type ExerciseCardProps = TouchableOpacityProps & { data: ExerciseDTO };

export function ExerciseCard({ data, ...rest }: ExerciseCardProps) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        style={{}}
        alignItems="center"
        p={2}
        pr={4}
        bg="gray.500"
        rounded="md"
      >
        <Image
          alt="Image demonstrating the form of the exercise"
          w={16}
          h={16}
          mr={4}
          source={{
            uri: `${api.defaults.baseURL}/exercise/thumb/${data.thumb}`,
          }}
          bg="gray.600"
          rounded="md"
          resizeMode="cover"
        />

        <VStack flex={1} style={{ gap: 2 }}>
          <Heading
            color="white"
            fontSize="lg"
            fontFamily="heading"
            fontWeight="bold"
          >
            {data.name}
          </Heading>
          <Text
            color="gray.200"
            fontSize="sm"
            fontFamily="body"
            numberOfLines={2}
          >
            {data.series} séries X {data.repetitions} repetições
          </Text>
        </VStack>

        <Icon
          as={Entypo}
          name="chevron-thin-right"
          size={6}
          color="gray.300"
        ></Icon>
      </HStack>
    </TouchableOpacity>
  );
}
