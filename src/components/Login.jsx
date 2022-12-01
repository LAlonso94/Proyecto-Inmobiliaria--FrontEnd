import React from "react";
import "../components/Login.css";

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
            <Input
              placeholder="email"
              type="email"
              variant="filled"
              mb={3}
              required
            />
            <Input
              placeholder="******"
              type="password"
              variant="filled"
              mb={6}
              required
            />
          </form>
          <Button className="buttonLogin" colorScheme="red" mb={8}>
            Iniciar sesión
          </Button>
          <Text fontSize="1xl" textAlign="center">
            ¿No tienes cuenta?
          </Text>
          <Button variant="link" colorScheme="blue">
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
