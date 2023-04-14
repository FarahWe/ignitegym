import { HStack, Heading, Icon, Text, VStack } from "native-base";

import { MaterialIcons } from "@expo/vector-icons";

import { UserPhoto } from "./UserPhoto";
import { TouchableOpacity } from "react-native";

export function HomeHeader() {
  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
      <UserPhoto
        alt="Imagem do usário"
        mr={4}
        size={16}
        source={{ uri: "https://github.com/farahWe.png" }}
      />

      <VStack flex={1}>
        <Text fontSize="md" color="gray.100">
          Olá,
        </Text>

        <Text fontSize="md" color="gray.100" fontFamily="heading">
          Eduardo Farah
        </Text>
      </VStack>

      <TouchableOpacity>
        <Icon as={MaterialIcons} name="logout" color="gray.200" size={7} />
      </TouchableOpacity>
    </HStack>
  );
}
