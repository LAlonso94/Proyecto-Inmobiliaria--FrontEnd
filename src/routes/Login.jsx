import React from "react";
import { useForm } from "react-hook-form";
import "../routes/Login.css";
import {
  Flex,
  Input,
  Button,
  FormControl,
  Switch,
  useColorMode,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";

function Login() {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.300", "blue.700");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => alert(data);

  return (
    <div>
      <Flex
        className="container"
        h="100vh"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          className="loginContainer"
          flexDirection="column"
          //bg={formBackground}
          borderRadius={8}
        >
          <img className="logo" src="./logoRossi.png" alt="logo" width="150" />

          <Text fontSize="4xl" textAlign="center">
            Bienvenido
          </Text>
          <form className="formContainer">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                placeholder="email"
                type="email"
                required
                pattern="/^[A-Za-z]+$/i"
                {...register("email", { required: true, minLength: 8 })}
              />
              {errors.email && <span>El email es requerido</span>}
              <Input
                placeholder="******"
                type="password"
                variant="filled"
                minLength="8"
                maxLength="20"
                required
              />
              {errors.password && (
                <span>La Contraseña ingresada no es valida</span>
              )}
            </form>
          </form>
          <Button className="buttonLogin" colorScheme="red" mb={8}>
            Iniciar sesión
          </Button>
          <Text fontSize="1xl" textAlign="center">
            ¿No tienes cuenta?
          </Text>
          <Button type="submit" variant="link">
            Registrarse
          </Button>
          <FormControl display="flex" justifyContent="center">
            <Text htmlFor="dark_mode" fontSize="1xl" textAlign="center">
              Modo oscuro
            </Text>
            <Switch
              id="dark_mode"
              colorScheme="red"
              onChange={toggleColorMode}
            />
          </FormControl>
        </Flex>
      </Flex>
    </div>
  );
}

export default Login;
