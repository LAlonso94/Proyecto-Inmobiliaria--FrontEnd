import React from "react";

import { useForm } from "react-hook-form";
import {
  Icon,
  Stack,
  Text,
  Input,
  Button,
  Textarea,
  HStack,
  Flex,
  Image,
  VStack,
  Box,
} from "@chakra-ui/react";
import {
  BsTelephoneFill,
  BsFillEnvelopeFill,
  BsFillPeopleFill,
  BsChatRightDotsFill,
  BsCheckCircleFill,
} from "react-icons/bs";

import Footer from "../../components/Footer/Footer";
import { Carousel } from "react-responsive-carousel";
import { SlideData } from "./prueba";

function Detail(props) {
  //const { id } = useParams();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const ImageSlider = ({ slides }) => {
    return (
      <Carousel infiniteLoop>
        {slides.map((slide) => {
          return <Image src={slide.image} height="auto" width="800px" />;
        })}
      </Carousel>
    );
  };

  return (
    <div>
      <Stack ml="5em" pr="5em" gap={10}>
        <Stack>
          <Text
            alignItems="center"
            bg="red.500"
            fontSize="2xl"
            textAlign="center"
            color="white"
          >
            OPERACION
          </Text>
        </Stack>

        <HStack>
          <Box w="50%" p={4} color="white">
            <ImageSlider slides={SlideData} />
          </Box>

          <Stack alignItems="center">
            <Image
              alignItems="center"
              mt="5"
              boxSize="100%"
              objectFit="cover"
              src="https://inmobiliariarossi.com.uy/image/i311660933_1803511643324454_1741263077902063853_n.jpg"
              alt="carrousel"
            />
          </Stack>
        </HStack>

        <Stack>
          <Text
            alignItems="center"
            bg="red.500"
            fontSize="2xl"
            textAlign="center"
            color="white"
          >
            DESCRIPCIÓN
          </Text>
        </Stack>
        <Stack pr="9em" pl="9em">
          <Text textAlign="center">
            Complejo habitacional Casa número 4.- Comodidades: 1 dormitorio,
            cocina-comedor integrada y baño y "patio frente".- Servicios de luz
            y agua corriente independientes.
          </Text>
        </Stack>
        <Stack gap={5}>
          <Text bg="red.500" fontSize="2xl" textAlign="center" color="white">
            CARACTERISTICAS
          </Text>
          <HStack justifyContent="space-evenly">
            <VStack alignItems="left">
              <HStack>
                <Icon color="red.500" boxSize="1em" as={BsCheckCircleFill} />
                <Text>Garantía: ANDA, CGN, y/o PORTO SEGUROS.</Text>
              </HStack>
              <HStack>
                <Icon color="red.500" boxSize="1em" as={BsCheckCircleFill} />
                <Text>Garage: Si</Text>
              </HStack>

              <HStack>
                <Icon color="red.500" boxSize="1em" as={BsCheckCircleFill} />
                <Text>Dormitorios:1</Text>
              </HStack>
            </VStack>
            <VStack alignItems="left">
              <HStack>
                <Icon color="red.500" boxSize="1em" as={BsCheckCircleFill} />
                <Text>Baños:1</Text>
              </HStack>
              <HStack>
                <Icon color="red.500" boxSize="1em" as={BsCheckCircleFill} />
                <Text>Comedor:Si</Text>
              </HStack>
              <HStack>
                <Icon color="red.500" boxSize="1em" as={BsCheckCircleFill} />
                <Text>Cocina: Si</Text>
              </HStack>
            </VStack>
            <VStack alignItems="left">
              <HStack>
                <Icon color="red.500" boxSize="1em" as={BsCheckCircleFill} />
                <Text>Superficie Edificada: 55m2</Text>
              </HStack>
              <HStack>
                <Icon color="red.500" boxSize="1em" as={BsCheckCircleFill} />
                <Text>Superficie Del Terreno: 45m2</Text>
              </HStack>
            </VStack>
          </HStack>
        </Stack>
        <Stack gap={3}>
          <Stack>
            <Text bg="red.500" fontSize="2xl" textAlign="center" color="white">
              CONSULTA POR ESTA PROPIEDAD
            </Text>
          </Stack>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack gap={3}>
              <HStack w=" 63em ">
                <Icon color="red.500" boxSize="1.5em" as={BsFillPeopleFill} />
                <Input
                  placeholder="Nombre y apellido"
                  type="text"
                  variant="filled"
                  required
                />
              </HStack>
              <HStack w=" 63em ">
                <Icon color="red.500" boxSize="1.5em" as={BsFillEnvelopeFill} />
                <Input
                  m={2}
                  variant="filled"
                  placeholder="Correo electronico:"
                  type="email"
                  required
                  {...register("email", { required: true, minLength: 8 })}
                />
              </HStack>
              <HStack w=" 63em ">
                <Icon color="red.500" boxSize="1.5em" as={BsTelephoneFill} />
                <Input
                  placeholder="Telefono"
                  type="tel"
                  variant="filled"
                  minLength="8"
                  required
                  {...register("tel", { required: true, minLength: 8 })}
                />
              </HStack>
              <HStack w=" 63em ">
                <Icon
                  color="red.500"
                  boxSize="1.5em"
                  as={BsChatRightDotsFill}
                />
                <Textarea
                  variant="filled"
                  placeholder="Deje aqui su comentario:"
                  {...register("comentarios", { required: true, minLength: 8 })}
                ></Textarea>
              </HStack>
              <Stack alignItems="flex-end">
                <Button
                  m={2}
                  className="buttonLogin"
                  colorScheme="red"
                  mb={8}
                  type="submit"
                >
                  Enviar
                </Button>
              </Stack>
            </Stack>
          </form>
        </Stack>
      </Stack>
      <Footer />
    </div>
  );
}

export default Detail;
