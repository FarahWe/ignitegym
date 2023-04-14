import { ExerciseCard } from "@components/ExerciseCard";
import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { FlatList, HStack, Text, VStack } from "native-base";
import { useState } from "react";

export function Home() {
  const [groups, setGroups] = useState(["costa", "ombro", "tríceps", "perna"]);
  const [groupSelected, setGroupSelected] = useState("perna");
  const [exercises, setExercises] = useState(["Deadlift"]);

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        horizontal
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected.toLowerCase() === item.toLowerCase()}
            onPress={() => setGroupSelected(item)}
          />
        )}
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 8 }}
        my={10}
        maxH={10}
      />

      <VStack px={8} flex={1}>
        <HStack justifyContent="space-between" mb={5}>
          <Text fontFamily="heading" fontSize="md" color="gray.200">
            Exercícios
          </Text>

          <Text fontSize="sm" color="gray.200">
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <ExerciseCard />}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ pb: 20 }}
        />
      </VStack>
    </VStack>
  );
}
