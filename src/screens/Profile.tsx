import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import {
  Center,
  ScrollView,
  VStack,
  Skeleton,
  Text,
  KeyboardAvoidingView,
  useToast,
} from "native-base";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { Platform, TouchableOpacity } from "react-native";
import { useAuth } from "@hooks/useAuth";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const PHOTO_SIZE = 33;

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  old_password: string;
  confirm_password: string;
};

const profileSchema = yup.object({
  name: yup.string().required("Informe o nome"),
  password: yup
    .string()
    .min(6, "A senha deve ter pelo menos 6 dígitos.")
    .nullable()
    .transform((value) => (!!value ? value : null)),
  confirm_password: yup
    .string()
    .nullable()
    .transform((value) => (!!value ? value : null))
    .oneOf([yup.ref("password"), null], "As senhas devem ser iguais.")
    .when("password", {
      is: (Field: any) => Field,
      then: (schema) =>
        schema
          .nullable()
          .required("Informe a confirmação da senha.")
          .transform((value) => (!!value ? value : null)),
    }),
});
export function Profile() {
  const toast = useToast();
  const { user } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    defaultValues: {
      name: user.name,
      email: user.email,
    },
    resolver: yupResolver(profileSchema),
  });

  const [photoIsLoading, setPhotoIsLoading] = useState(false);
  const [userPhoto, setUserPhoto] = useState("https://github.com/FarahWe.png");

  async function handleUserPhotoSelected() {
    setPhotoIsLoading(true);

    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      });

      if (photoSelected.canceled) {
        return;
      }

      const asset = photoSelected.assets[0];

      if (asset) {
        const photoInfo = await FileSystem.getInfoAsync(asset.uri);

        if (photoInfo.exists && photoInfo.size / 1024 / 1024 > 2) {
          return toast.show({
            title: "Essa imagem é muito grande. Escolha uma de até 5MB.",
            placement: "top",
            bgColor: "red.500",
          });
        }

        setUserPhoto(asset.uri);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setPhotoIsLoading(false);
    }
  }

  async function handleProfileUpdate(data: FormDataProps) {
    console.log(data);
  }

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS == "ios" ? "padding" : undefined}
        keyboardVerticalOffset={10}
      >
        <ScrollView contentContainerStyle={{ paddingBottom: 56 }}>
          <Center mt={6} px={10}>
            {photoIsLoading ? (
              <Skeleton
                w={PHOTO_SIZE}
                h={PHOTO_SIZE}
                rounded="full"
                startColor="gray.500"
                endColor="gray.400"
              />
            ) : (
              <UserPhoto
                source={{ uri: userPhoto }}
                alt="Foto do usuário"
                size={PHOTO_SIZE}
              />
            )}

            <TouchableOpacity onPress={handleUserPhotoSelected}>
              <Text
                color="green.500"
                fontWeight="bold"
                fontSize="md"
                mt={2}
                mb={8}
              >
                Alterar Foto
              </Text>
            </TouchableOpacity>

            <Controller
              control={control}
              name="name"
              render={({ field: { value, onChange } }) => (
                <Input
                  bg="gray.600"
                  placeholder="Nome"
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.name?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="email"
              render={({ field: { value, onChange } }) => (
                <Input
                  bg="gray.600"
                  placeholder="E-mail"
                  isDisabled
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
          </Center>

          <VStack px={10} mt={12} mb={9}>
            <Text fontFamily="heading" color="gray.200" fontSize="md" mb={2}>
              Alterar senha
            </Text>

            <Controller
              control={control}
              name="old_password"
              render={({ field: { onChange } }) => (
                <Input
                  bg="gray.600"
                  placeholder="Senha antiga"
                  secureTextEntry
                  onChangeText={onChange}
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              render={({ field: { onChange } }) => (
                <Input
                  bg="gray.600"
                  placeholder="Nova senha"
                  secureTextEntry
                  onChangeText={onChange}
                  errorMessage={errors.password?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="confirm_password"
              render={({ field: { onChange } }) => (
                <Input
                  bg="gray.600"
                  placeholder="Confirme a nova senha"
                  secureTextEntry
                  onChangeText={onChange}
                  errorMessage={errors.confirm_password?.message}
                />
              )}
            />

            <Button
              title="Atualizar"
              mt={4}
              onPress={handleSubmit(handleProfileUpdate)}
            />
          </VStack>
        </ScrollView>
      </KeyboardAvoidingView>
    </VStack>
  );
}
