import { useCallback, useEffect, useState } from "react";

import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

import { api } from "@services/api";

import { AppError } from "@utils/AppError";

import { FlatList, HStack, Heading, Text, VStack, useToast } from "native-base";
import { ExerciseCard, Group, HomeHeader } from "@components/index";

export type Exercise = {
  name: string;

  sets: number;
  reps: number;
};

const EXERCISES: Exercise[] = [
  { name: "Seated cable row", sets: 3, reps: 12 },
  { name: "Dumbbell row", sets: 3, reps: 12 },
  { name: "Inverted row", sets: 3, reps: 12 },
  { name: "Barbbell landmine row", sets: 3, reps: 12 },
];

const TOAST_DURATION_MS = 2500;

export function Home() {
  const [groups, setGroups] = useState<string[]>([]);
  const [activeGroup, setActiveGroup] = useState("antebraço");

  const [exercises, setExercises] = useState<Exercise[]>([]);

  const Toast = useToast();

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const handleActiveMuscleGroup = (group: string) => {
    setActiveGroup(group);
  };

  const fetchGroups = async () => {
    try {
      const response = await api.get("/groups");
      setGroups(response.data);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Sorry, we couldn't list the muscle groups. Try again later.";

      if (isAppError)
        Toast.show({
          placement: "top",
          duration: TOAST_DURATION_MS,
          title,
          bg: "red.500",
        });
    }
  };

  const fetchExercisesByGroup = async () => {
    try {
      const response = await api.get(`/exercises/bygroup/${activeGroup}`);
      setExercises(response.data);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Sorry, we couldn't list the exercises for this muscle group. Try again later.";

      if (isAppError)
        Toast.show({
          placement: "top",
          duration: TOAST_DURATION_MS,
          title,
          bg: "red.500",
        });
    }
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchExercisesByGroup();
    }, [activeGroup])
  );

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
        data={groups}
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
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{
            gap: 3,
            px: 8,
            pb: 12,
          }}
          data={exercises}
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
