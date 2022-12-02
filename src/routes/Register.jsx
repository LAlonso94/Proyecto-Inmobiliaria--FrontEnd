import React from "react";
import { useForm } from "react-hook-form";
import "../routes/Register.css";
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
} from "@chakra-ui/react";

function Register() {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.300", "blue.700");
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

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
          <div className="formContainer">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h6>Nombre:</h6>
              <Input
                placeholder="nombre"
                type="text"
                variant="filled"
                required
              />
              <h6>Correo electronico:</h6>
              <Input
                placeholder="email"
                type="email"
                required
                {...register("email", { required: true, minLength: 8 })}
              />

              <h6>Contraseña:</h6>
              <Input
                placeholder="******"
                type="password"
                variant="filled"
                minLength="8"
                maxLength="20"
                required
              />
              <Button
                className="buttonLogin"
                colorScheme="red"
                mb={8}
                type="submit"
              >
                Crear cuenta
              </Button>
            </form>
          </div>
          <Button className="buttonLogin" colorScheme="red" mb={8}>
            Crear cuenta
          </Button>
          <Text fontSize="1xl" textAlign="center">
            ¿Ya tienes cuenta?
          </Text>
          <Button
            variant="link"
            colorScheme="blue"
            onClick={() => navigate("/api/login")}
          >
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
