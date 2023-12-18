import { TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import { Button } from "@components/index";
import {
  Box,
  HStack,
  Heading,
  Icon,
  Image,
  ScrollView,
  Text,
  VStack,
} from "native-base";

import RepsSvg from "@assets/repetitions.svg";
import SetsSvg from "@assets/series.svg";
import BodySvg from "@assets/body.svg";

type RouteParams = {
  name: string;
  sets: string;
  reps: string;
};

export function Exercise() {
  const navigation = useNavigation();

  const route = useRoute();
  const exercise = route.params;

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
            Seated rows
          </Heading>

          <HStack alignItems="center" style={{ gap: 4 }}>
            <BodySvg />
            <Text color="gray.200" textTransform="capitalize">
              Back
            </Text>
          </HStack>
        </HStack>
      </VStack>

      <ScrollView>
        <VStack
          alignItems="center"
          justifyContent="center"
          px={8}
          style={{ gap: 12 }}
        >
          <Image
            resizeMode="cover"
            source={{ uri: "" }}
            alt="Exercise name"
            bg="gray.600"
            w="full"
            h={80}
            rounded="lg"
          />
          <Image
            resizeMode="cover"
            source={{ uri: "" }}
            alt="Exercise name"
            bg="gray.600"
            w="full"
            h={80}
            rounded="lg"
          />
          <Image
            resizeMode="cover"
            source={{ uri: "" }}
            alt="Exercise name"
            bg="gray.600"
            w="full"
            h={80}
            rounded="lg"
          />

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
                <RepsSvg />
                <Text color="white">{`${"12"} reps`}</Text>
              </HStack>

              <HStack style={{ gap: 8 }}>
                <SetsSvg />
                <Text color="white">{`${"03"} sets`}</Text>
              </HStack>
            </HStack>

            <Button title="Complete exercise"></Button>
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  );
}
