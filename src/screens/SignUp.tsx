import {
  VStack,
  Image,
  Text,
  Center,
  Heading,
  ScrollView,
  KeyboardAvoidingView,
} from "native-base";

import LogoSvg from "@assets/logo.svg";
import BackgroundImg from "@assets/background.png";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

export function SignUp() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleSignIn() {
    navigation.navigate("signIn");
  }

  return (
    <VStack safeArea px={10} flex={1} bg="gray.700">
      <Image
        source={BackgroundImg}
        defaultSource={BackgroundImg}
        alt="Pessoas treinando"
        resizeMode="contain"
        position="absolute"
      />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS == "ios" ? "padding" : undefined}
        keyboardVerticalOffset={20}
      >
        <ScrollView showsVerticalScrollIndicator={true} flex={1}>
          <Center mt={10} mb={24}>
            <LogoSvg />

            <Text color="gray.100" fontSize="sm">
              Treine sua mente e seu corpo
            </Text>
          </Center>

          <Center>
            <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
              Crie sua conta
            </Heading>

            <Input placeholder="Nome" autoCapitalize="none" />

            <Input
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Input placeholder="Senha" secureTextEntry />

            <Button title="Criar e acessar" />
          </Center>

          <Center mt={24} pb={10}>
            <Button
              title="Voltar para login"
              variant="outline"
              onPress={handleSignIn}
            />
          </Center>
        </ScrollView>
      </KeyboardAvoidingView>
    </VStack>
  );
}
