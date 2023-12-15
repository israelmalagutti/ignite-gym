import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { AppNavigatorRoutesProps } from "@routes/app.routes";

import { FlatList, HStack, Heading, Text, VStack } from "native-base";
import { Group, HomeHeader } from "@components/index";

type MuscleGroup =
  | "abs"
  | "all"
  | "back"
  | "biceps"
  | "chest"
  | "glutes"
  | "triceps"
  | "legs";

const EXERCISE_TYPES: MuscleGroup[] = [
  "all",
  "abs",
  "back",
  "biceps",
  "chest",
  "glutes",
  "triceps",
  "legs",
];

export function Home() {
  const [activeGroup, setActiveGroup] = useState<MuscleGroup>("all");

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const handleActiveMuscleGroup = (group: MuscleGroup) => {
    setActiveGroup(group);
  };

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        my={10}
        maxH={12}
        _contentContainerStyle={{
          alignItems: "center",
          gap: 3,
          px: 8,
        }}
        data={EXERCISE_TYPES}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={activeGroup === item}
            onPress={() => handleActiveMuscleGroup(item)}
          />
        )}
      />

      <HStack justifyContent="space-between" px={8}>
        <Heading color={"gray.200"} fontSize={"sm"}>
          Exercises
        </Heading>
        <Text color={"gray.200"} fontSize={"sm"}>
          4
        </Text>
      </HStack>
    </VStack>
  );
}
