import { Center, Text } from "native-base";

type Props = {
  title: string;
};

export function ScreenHeader({ title }: Props) {
  return (
    <Center pb={6} pt={16} bg="gray.600">
      <Text color="gray.100" fontSize="xl" fontFamily="heading">
        {title}
      </Text>
    </Center>
  );
}
