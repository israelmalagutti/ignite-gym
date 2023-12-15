import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { AppNavigatorRoutesProps } from "@routes/app.routes";

import { FlatList, VStack } from "native-base";
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
        contentContainerStyle={{ gap: 12, paddingHorizontal: 32 }}
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
    </VStack>
  );
}
