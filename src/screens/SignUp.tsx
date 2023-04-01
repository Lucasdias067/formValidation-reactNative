import { VStack, Heading, Center } from "native-base";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../components/Input";
import Button from "../components/Button";
import { useEffect } from "react";

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
};

const signUpSchema = yup.object({
  name: yup.string().required("Informe o nome"),
  email: yup.string().required("Informe o email").email("Email inválido"),
  password: yup
    .string()
    .required("Informe a senha")
    .min(6, "Deve ter pelo menos 6 digitos"),
  password_confirm: yup
    .string()
    .required("Informe a confirmação de senha")
    .oneOf([yup.ref("password"), null], "A senha está incorreta"),
});

export default function SignUp() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
    formState,
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  });

  function handleSignUp(data: FormDataProps) {
    console.log(data);
  }

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ name: "", email: "", password: "", password_confirm: "" });
    }
  }, [formState, reset]);

  return (
    <VStack flex={1} bgColor="gray.200" px={10}>
      <Center>
        <Heading my={12}>Crie sua conta</Heading>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <Input
              value={value}
              placeholder="Nome"
              onChangeText={onChange}
              errorMessage={errors.name?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <Input
              value={value}
              placeholder="E-mail"
              onChangeText={onChange}
              errorMessage={errors.email?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <Input
              value={value}
              placeholder="Senha"
              onChangeText={onChange}
              secureTextEntry
              errorMessage={errors.password?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password_confirm"
          render={({ field: { onChange, value } }) => (
            <Input
              value={value}
              placeholder="Confirme a senha"
              onChangeText={onChange}
              secureTextEntry
              errorMessage={errors.password_confirm?.message}
            />
          )}
        />
        <Button title="Cadastrar" onPress={handleSubmit(handleSignUp)} />
      </Center>
    </VStack>
  );
}
