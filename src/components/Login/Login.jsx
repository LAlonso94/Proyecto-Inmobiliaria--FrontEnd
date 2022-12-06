import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  Flex,
  Input,
  Button,
  FormControl,
  Switch,
  useColorMode,
  useColorModeValue,
  Text,
  Box,
  Image,
} from "@chakra-ui/react";
import { loginSesion } from "../../api/Rule_auth_users";
import Register from "../Register/Register";

function Login() {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.300", "blue.700");
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
      })
      .catch((error) => {
        alert(error);
      });

  return (
    <Flex h="100vh" align="center" justify="center" minW="390px">
      <Flex
        className="loginContainer"
        flexDirection="column"
        borderRadius={8}
        justify="center"
        alignSelf="center"
        w="30%"
        p="1em"
        boxShadow="2px 4px 14px 6px #968585ab"
        bg="repeating-linear-gradient(
          -180deg,
          #fff 0%,
          #fff 43%,
          #e31e24 0%,
          #e31e24 82%
        )"
        minW="390px"
        minH="750px"
      >
        <Image className="logo" src="../logoRossi.png" alt="logo" width="36" />

        <Text fontSize="4xl" textAlign="center">
          Bienvenido
        </Text>
        <Box w="50%" alignSelf="center" pt="2em">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              placeholder="email"
              type="email"
              required
              mb="1.5"
              {...register("email", { required: true, minLength: 8 })}
            />
            {errors.email && (
              <Text fontSize="sm" align="center" mb="1.5">
                El email es requerido
              </Text>
            )}
            <Input
              //placeholder="******"
              type="password"
              variant="filled"
              minLength="8"
              maxLength="20"
              required
              mb="1.5"
              {...register("password", { required: true, minLength: 8 })}
            />
            {errors.password && (
              <Text fontSize="sm" align="center" mb="1.5">
                La Contraseña ingresada no es valida
              </Text>
            )}
            <Button colorScheme="red" mb={8} type="submit">
              Iniciar sesión
            </Button>
          </form>
        </Box>

        <Text fontSize="1xl" textAlign="center">
          ¿No tienes cuenta?
        </Text>
        <Button variant="link" onClick={() => navigate(<Register />)}>
          Registrarse
        </Button>
        <FormControl display="flex" justifyContent="center">
          <Text htmlFor="dark_mode" fontSize="1xl" textAlign="center">
            Modo oscuro
          </Text>
          <Switch id="dark_mode" colorScheme="red" onChange={toggleColorMode} />
        </FormControl>
      </Flex>
    </Flex>
  );
}

export default Login;
