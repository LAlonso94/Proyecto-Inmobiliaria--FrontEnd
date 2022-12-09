import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  Flex,
  Input,
  Button,
  Text,
  Box,
  Image,
  IconButton,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { loginSesion } from "../../api/Rule_auth_users";
import Register from "../../components/Register/Register";

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) =>
    await loginSesion(data)
      .then(() => {
        navigate("/");
        window.location.reload();
      })
      .catch((error) => {
        alert(error);
      });

  return (
    <div
      style={{
        backgroundImage:
          "url(/Proyecto-Inmobiliaria--FrontEnd/public/foto.jpg)",
      }}
    >
      <Flex h="90vh" align="center" justify="center" mt="12">
        <Flex
          flexDirection="column"
          borderRadius={8}
          justify="center"
          align="center"
          h="10%"
          boxShadow="2px 4px 14px 6px #968585ab"
          bg="repeating-linear-gradient(
          -180deg,
          #fff 0%,
          #fff 43%,
          #e31e24 0%,
          #e31e24 82%
        )"
          minW="390px"
          minH="600px"
        >
          <Image src="../logoRossi.png" alt="logo" width="36" />

          <Text
            fontSize="4xl"
            align="center"
            mb="16"
            textShadow="0px 1px #000000"
          >
            Bienvenido
          </Text>
          <Box w="50%" alignSelf="center" pt="1em">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                placeholder="E-mail"
                type="email"
                variant="filled"
                required
                mb="4"
                {...register("email", { required: true, minLength: 8 })}
              />
              {errors.email && (
                <Text fontSize="sm" align="center" mb="1.5">
                  El email es requerido
                </Text>
              )}
              <Input
                placeholder="Contraseña"
                type="password"
                variant="filled"
                minLength="8"
                maxLength="20"
                required
                mb="4"
                {...register("password", { required: true, minLength: 8 })}
              />
              {errors.password && (
                <Text fontSize="sm" align="center" mb="1.5" color="white">
                  La contraseña debe tener un minimo de 8 caracteres
                </Text>
              )}
              <Button colorScheme="red" mb={8} type="submit">
                Iniciar sesión
              </Button>
            </form>
          </Box>

          <Text fontSize="1xl" textAlign="center" pt="10">
            ¿No tienes cuenta?
          </Text>
          <Register />
          <IconButton
            aria-label="backHome"
            icon={<ArrowBackIcon />}
            onClick={() => {
              navigate("/");
            }}
          />
        </Flex>
      </Flex>
    </div>
  );
}

export default Login;
