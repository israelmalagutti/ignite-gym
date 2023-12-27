import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { useAuth } from "@hooks/useAuth";

import { UserPhoto } from "./UserPhoto";
import { HStack, Heading, Icon, Text, VStack } from "native-base";

import defaultUserPhoto from "@assets/userPhotoDefault.png";

export function HomeHeader() {
  const { user, signOut } = useAuth();

  return (
    <HStack pt={16} pb={5} px={8} alignItems="center" bg="gray.600">
      <UserPhoto
        source={
          user.avatar
            ? {
                uri: user.avatar,
              }
            : defaultUserPhoto
        }
        size={16}
        mr={4}
      />

      <VStack flex={1}>
        <Text color="gray.100" fontSize="md">
          Hi,
        </Text>
        <Heading color="gray.100" fontSize="md">
          {user.name}
        </Heading>
      </VStack>

      <TouchableOpacity onPress={signOut}>
        <Icon as={MaterialIcons} name="logout" color="gray.200" size={7} />
      </TouchableOpacity>
    </HStack>
  );
}
