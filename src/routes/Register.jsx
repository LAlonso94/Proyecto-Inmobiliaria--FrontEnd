import React from "react";
import "../routes/Register.css";

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

function Register() {
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
          bg={formBackground}
          borderRadius={8}
        >
          <Text fontSize="4xl" textAlign="center">
            Registrarse
          </Text>
          <form className="formContainer">
            <h6>Nombre:</h6>
            <Input
              placeholder="nombre"
              type="text"
              variant="filled"
              mb={3}
              required
            />
            <h6>Correo electronico:</h6>
            <Input
              placeholder="email"
              type="email"
              variant="filled"
              mb={3}
              required
            />
            <h6>Contraseña:</h6>
            <Input
              placeholder="******"
              type="password"
              variant="filled"
              mb={6}
              required
            />
          </form>
          <Button className="buttonLogin" colorScheme="red" mb={8}>
            Crear cuenta
          </Button>
          <Text fontSize="1xl" textAlign="center">
            ¿Ya tienes cuenta?
          </Text>
          <Button variant="link" colorScheme="blue">
            Iniciar sesión
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

export default Register;
