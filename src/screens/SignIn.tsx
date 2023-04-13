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

export function SignIn() {
  return (
    <VStack safeArea px={10} flex={1} bg="gray.700">
      <Image
        source={BackgroundImg}
        alt="Pessoas treinando"
        resizeMode="contain"
        position="absolute"
      />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS == "ios" ? "padding" : undefined}
        keyboardVerticalOffset={50}
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
              Acesse sua conta
            </Heading>

            <Input
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Input placeholder="Senha" secureTextEntry />

            <Button title="Acessar" />
          </Center>

          <Center mt={24} pb={10}>
            <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">
              Ainda não tem acesso
            </Text>

            <Button title="Criar conta" variant="outline" />
          </Center>
        </ScrollView>
      </KeyboardAvoidingView>
    </VStack>
  );
}
