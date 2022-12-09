import React from "react";
import { useForm } from "react-hook-form";
import "../Register/Register.css";
import { useNavigate } from "react-router-dom";
import {
  Flex,
  Input,
  Button,
  useColorModeValue,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import logo from "/public/logoRossi.png";
import { registerNewUser } from "../../api/Rule_auth_users";

function Register() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const formBackground = useColorModeValue("gray.300", "blue.700");
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) =>
    await registerNewUser(data)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert(error);
      });

  return (
    <>
      <Button variant="link" onClick={onOpen}>
        Registrarse
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          h="100vh"
          display="flex"
          alignItems="center"
          bg={formBackground}
          borderRadius={8}
          maxW="390px"
          maxH="600px"
        >
          <ModalHeader w="80%" display="flex" justifyContent="space-evenly">
            <Image src={logo} width="12" />
            <Text fontSize="4xl" textAlign="center" color="white">
              Registrarse
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody w="100%" pt="1.5em" align="center" justify="center">
            <Flex align="center" justify="center">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h6>
                  <b>Nombre:</b>
                </h6>
                <Input
                  placeholder="Nombre"
                  type="text"
                  variant="filled"
                  required
                  mb="4"
                  {...register("nombre", { required: true })}
                />
                <h6>
                  <b>Correo electrónico:</b>
                </h6>
                <Input
                  placeholder="E-mail"
                  type="email"
                  required
                  mb="4"
                  {...register("email", { required: true, minLength: 8 })}
                />

                <h6>
                  <b>Contraseña:</b>
                </h6>
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
                <Button
                  className="buttonLogin"
                  colorScheme="red"
                  mb={8}
                  type="submit"
                >
                  Crear cuenta
                </Button>
              </form>
            </Flex>
            <Text fontSize="1xl" textAlign="center">
              ¿Ya tienes cuenta?
            </Text>
            <Button variant="link" colorScheme="blue" onClick={onClose}>
              Iniciar sesión
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Register;
