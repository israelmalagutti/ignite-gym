import { useState } from "react";
import { TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";

import { Button, Input, ScreenHeader, UserPhoto } from "@components/index";
import {
  Center,
  Heading,
  ScrollView,
  Skeleton,
  Text,
  VStack,
  useToast,
} from "native-base";

const PHOTO_SIZE = 33;

const TOAST_DURATION_IN_MS = 3000;

export function Profile() {
  const [userPhoto, setUserPhoto] = useState(
    "https://github.com/israelmalagutti.png"
  );
  const [photoLoading, setPhotoLoading] = useState(true);

  const toast = useToast();

  const handleUserPhotoSelect = async () => {
    setPhotoLoading(true);

    try {
      const selectedPhoto = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      });

      if (selectedPhoto.canceled) return;

      if (selectedPhoto.assets[0].uri) {
        const photoInfo = await FileSystem.getInfoAsync(
          selectedPhoto.assets[0].uri,
          { size: true }
        );

        if (photoInfo.exists && photoInfo.size / 1024 / 1024 > 5)
          return toast.show({
            placement: "top",
            duration: TOAST_DURATION_IN_MS,
            title: "This image is too big. Choose an image up to 5MB",
            bg: "red.600",
          });

        setUserPhoto(selectedPhoto.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setPhotoLoading(false);
    }
  };

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
              source={{
                uri: userPhoto,
              }}
              size={PHOTO_SIZE}
            />
          )}

          <TouchableOpacity>
            <Text
              color="green.500"
              fontSize="md"
              fontFamily="heading"
              fontWeight="bold"
              onPress={handleUserPhotoSelect}
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
