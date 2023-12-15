import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { type Exercise } from "@screens/Home";

import { HStack, Heading, Icon, Image, Text, VStack } from "native-base";

type ExerciseCardProps = TouchableOpacityProps & Exercise;

export function ExerciseCard({ name, sets, reps, ...rest }: ExerciseCardProps) {
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
          bg="gray.600"
          rounded="md"
          resizeMode="center"
        />

        <VStack flex={1} style={{ gap: 2 }}>
          <Heading
            color="white"
            fontSize="lg"
            fontFamily="heading"
            fontWeight="bold"
          >
            {name}
          </Heading>
          <Text
            color="gray.200"
            fontSize="sm"
            fontFamily="body"
            numberOfLines={2}
          >
            {`${sets + " sets"} of ${reps + " reps"}`}
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
