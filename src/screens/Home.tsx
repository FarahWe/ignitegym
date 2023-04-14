import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { FlatList, HStack, VStack } from "native-base";
import { useState } from "react";

export function Home() {
  const [groups, setGroups] = useState(["costa", "ombro", "tríceps", "perna"]);
  const [groupSelected, setGroupSelected] = useState("perna");

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
            isActive={groupSelected === item}
            onPress={() => setGroupSelected(item)}
          />
        )}
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 8 }}
        my={10}
        maxH={10}
      />
    </VStack>
  );
}
