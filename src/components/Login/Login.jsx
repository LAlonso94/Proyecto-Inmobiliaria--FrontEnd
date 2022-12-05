import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../Login/Login.css";
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
          <img className="logo" src="../logoRossi.png" alt="logo" width="150" />

          <Text fontSize="4xl" textAlign="center">
            Bienvenido
          </Text>
          <div className="formContainer">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                placeholder="email"
                type="email"
                required
                {...register("email", { required: true, minLength: 8 })}
              />
              {errors.email && <span>El email es requerido</span>}
              <Input
                //placeholder="******"
                type="password"
                variant="filled"
                minLength="8"
                maxLength="20"
                required
                {...register("password", { required: true, minLength: 8 })}
              />
              {errors.password && (
                <span>La Contraseña ingresada no es valida</span>
              )}
              <Button
                className="buttonLogin"
                colorScheme="red"
                mb={8}
                type="submit"
              >
                Iniciar sesión
              </Button>
            </form>
          </div>

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
