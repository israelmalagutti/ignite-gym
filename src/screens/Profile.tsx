import { useState } from "react";

import { Button, Input, ScreenHeader, UserPhoto } from "@components/index";
import {
  Center,
  Heading,
  ScrollView,
  Skeleton,
  Text,
  VStack,
} from "native-base";
import { TouchableOpacity } from "react-native";

const PHOTO_SIZE = 33;

export function Profile() {
  const [photoLoading, setPhotoLoading] = useState(true);

  return (
    <VStack flex={1}>
      <ScreenHeader title="Profile" />

      <ScrollView
        flexGrow={1}
        pt={6}
        contentContainerStyle={{ gap: 32, paddingBottom: 24 }}
      >
        <Center style={{ gap: 8 }}>
          {photoLoading ? (
            <Skeleton
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded="full"
              startColor="gray.500"
              endColor="gray.400"
            />
          ) : (
            <UserPhoto
              source={{ uri: "https://github.com/israelmalagutti.png" }}
              size={PHOTO_SIZE}
            />
          )}

          <TouchableOpacity>
            <Text
              color="green.500"
              fontSize="md"
              fontFamily="heading"
              fontWeight="bold"
            >
              Update photo
            </Text>
          </TouchableOpacity>
        </Center>

        <VStack px={8} style={{ gap: 16 }}>
          <Input placeholder="Name" />
          <Input placeholder="E-mail" isDisabled value="example@email.com" />

          <VStack pt={8} style={{ gap: 16 }}>
            <Heading
              mb={-2}
              color="gray.200"
              fontSize="md"
              fontFamily="heading"
              fontWeight="bold"
            >
              Change Password
            </Heading>
            <Input placeholder="New password" />
            <Input placeholder="Old password" />
          </VStack>

          <Button title="Update" />
        </VStack>
      </ScrollView>
    </VStack>
  );
}
