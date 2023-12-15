import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { AppNavigatorRoutesProps } from "@routes/app.routes";

import { FlatList, HStack, Heading, Text, VStack } from "native-base";
import { ExerciseCard, Group, HomeHeader } from "@components/index";

type MuscleGroup =
  | "abs"
  | "all"
  | "back"
  | "biceps"
  | "chest"
  | "glutes"
  | "triceps"
  | "legs";

export type Exercise = {
  name: string;

  sets: number;
  reps: number;
};

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

const EXERCISES: Exercise[] = [
  { name: "Seated cable row", sets: 3, reps: 12 },
  { name: "Dumbbell row", sets: 3, reps: 12 },
  { name: "Inverted row", sets: 3, reps: 12 },
  { name: "Barbbell landmine row", sets: 3, reps: 12 },
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
        minH={12}
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
            isActive={activeGroup.toLowerCase() === item.toLowerCase()}
            onPress={() => handleActiveMuscleGroup(item)}
          />
        )}
      />

      <VStack flex={1} style={{ gap: 12 }}>
        <HStack justifyContent="space-between" px={8}>
          <Heading color={"gray.200"} fontSize={"sm"}>
            Exercises
          </Heading>
          <Text color={"gray.200"} fontSize={"sm"}>
            {EXERCISES.length}
          </Text>
        </HStack>

        <FlatList
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{
            gap: 3,
            px: 8,
            pb: 12,
          }}
          data={EXERCISES}
          keyExtractor={item => item.name}
          renderItem={({ item: exercise }) => (
            <ExerciseCard
              name={exercise.name}
              sets={exercise.sets}
              reps={exercise.reps}
              onPress={() => navigation.navigate("exercise", { exercise })}
            />
          )}
        />
      </VStack>
    </VStack>
  );
}
