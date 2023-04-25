import { HStack, Icon, Image, Text, VStack } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Entypo } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {};

export function ExerciseCard({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        bg="gray.500"
        alignItems="center"
        p={2}
        pr={4}
        rounded="md"
        mb={3}
      >
        <Image
          source={{
            uri: "https://i.ytimg.com/vi/zM4pTzmVH9Q/maxresdefault.jpg",
          }}
          alt="Imagem do exercício"
          w={16}
          mr={4}
          h={16}
          rounded="md"
          resizeMode="cover"
        />

        <VStack flex={1}>
          <Text fontSize="lg" color="white" fontFamily="heading">
            Deadlift
          </Text>

          <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2}>
            Até a falha
          </Text>
        </VStack>

        <Icon as={Entypo} name="chevron-thin-right" color="gray.300" />
      </HStack>
    </TouchableOpacity>
  );
}
