import React from "react";
import { useForm } from "react-hook-form";
import "../Register/Register.css";
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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

function Register() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.300", "blue.700");
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Button variant="link" onClick={onOpen}>
        Registrarse
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text fontSize="4xl" textAlign="center">
              Registrarse
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="formContainer">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h6>Nombre:</h6>
                <Input
                  placeholder="Nombre"
                  type="text"
                  variant="filled"
                  required
                  {...register("nombre", { required: true })}
                />
                <h6>Correo electronico:</h6>
                <Input
                  placeholder="E-mail"
                  type="email"
                  required
                  {...register("email", { required: true, minLength: 8 })}
                />

                <h6>Contraseña:</h6>
                <Input
                  placeholder="Contraseña"
                  type="password"
                  variant="filled"
                  minLength="8"
                  maxLength="20"
                  required
                  {...register("password", { required: true, minLength: 8 })}
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
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Register;
