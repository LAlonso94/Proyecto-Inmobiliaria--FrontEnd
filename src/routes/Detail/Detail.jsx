import React from "react";

import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Icon,
  Stack,
  Text,
  Input,
  Button,
  Textarea,
  HStack,
  VStack,
} from "@chakra-ui/react";
import {
  BsTelephoneFill,
  BsFillEnvelopeFill,
  BsFillPeopleFill,
  BsChatRightDotsFill,
  BsCheckCircleFill,
  BsHouseFill,
} from "react-icons/bs";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Rule_Estates from "../../api/Rule_Estates";
import { useState } from "react";
import { useEffect } from "react";

function Detail() {
  const { id } = useParams();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const [detail, setDetail] = useState();

  const detailEstate = async (estate) => {
    await Rule_Estates.getSearchId(estate)
      .then((result) => {
        setDetail(result);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(detail, "DETALLE");
  useEffect(() => {
    detailEstate(id);
  }, []);

  return (
    <div>
      {/* <Nav /> */}

      <Stack w="auto" gap={6}>
        <Stack>
          <Text
            alignItems="center"
            bg="red.500"
            fontSize="2xl"
            textAlign="center"
            color="white"
          >
            {/* {detail?.operacion} */}
          </Text>
        </Stack>
        <Stack>
          <VStack
            pos="absolute"
            zIndex="100"
            color="white"
            h="auto"
            w="auto"
            bg="red.500"
            alignItems="flex-start"
            p="0.5em"
            borderRadius="0.5em"
          >
            <HStack>
              <Icon boxSize="2em" as={BsHouseFill} />
              <Text
                textTransform="uppercase"
                fontSize={{ base: "1xl", lg: "2xl" }}
              >
                {detail?.operacion}
              </Text>
            </HStack>
            <Text
              textTransform="uppercase"
              fontSize={{ base: "1xl", lg: "3xl" }}
            >
              {detail?.precio}
            </Text>
          </VStack>
          <Carousel>
            <div>
              <img src="https://inmobiliariarossi.com.uy/image/iWhatsApp%20Image%202022-10-20%20at%2020.09.45%20(4).jpeg" />
            </div>
            <div>
              <img src="https://inmobiliariarossi.com.uy/image/i311704147_1803511309991154_6805421820029665669_noo.jpg" />
            </div>
            <div>
              <img src="https://inmobiliariarossi.com.uy/image/i309425992_1803541783321440_8836522809821014496_n.jpg" />
            </div>
            <div>
              <img src="https://inmobiliariarossi.com.uy/image/iWhatsApp%20Image%202022-10-20%20at%2020.09.45%20(3).jpeg" />
            </div>
            <div>
              <img src="https://inmobiliariarossi.com.uy/image/iWhatsApp%20Image%202022-10-20%20at%2020.09.45.jpeg" />
            </div>
            <div>
              <img src="https://inmobiliariarossi.com.uy/image/iWhatsApp%20Image%202022-10-20%20at%2020.09.45%20(2).jpeg" />
            </div>
          </Carousel>
        </Stack>
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
          <Stack textAlign={{ base: "center", lg: "center" }}>
            <Text
              pl={{ base: "1em", lg: "10em" }}
              pr={{ base: "1em", lg: "10em" }}
              textAlign={{ base: "center", lg: "center" }}
            >
              {detail?.descripcion}
            </Text>
          </Stack>
        </Stack>
        <Stack gap={5}>
          <Text bg="red.500" fontSize="2xl" textAlign="center" color="white">
            CARACTERíSTICAS
          </Text>
          <HStack
            justifyContent="center"
            alignItems="start"
            gap={{ lg: "3em" }}
          >
            <Stack h="50%" alignItems="left">
              <HStack h="30%">
                <Icon color="red.500" boxSize="1em" as={BsCheckCircleFill} />
                <Text>Operación: {detail?.operacion}</Text>
              </HStack>
              <HStack h="30%">
                <Icon color="red.500" boxSize="1em" as={BsCheckCircleFill} />
                <Text>Superficie Edificada: {detail?.metrosEdificados}</Text>
              </HStack>
              <HStack h="30%">
                <Icon color="red.500" boxSize="1em" as={BsCheckCircleFill} />
                <Text>Superficie Del Terreno: {detail?.metrosTerreno}</Text>
              </HStack>
            </Stack>
            <Stack justifyContent="center" h="50%" alignItems="left">
              <HStack h="15%">
                <Icon color="red.500" boxSize="1em" as={BsCheckCircleFill} />
                <Text>Dormitorios: {detail?.dormitorios}</Text>
              </HStack>
              <HStack h="15%">
                <Icon color="red.500" boxSize="1em" as={BsCheckCircleFill} />
                <Text>Baños: {detail?.baños}</Text>
              </HStack>
              <HStack h="15%">
                <Icon color="red.500" boxSize="1em" as={BsCheckCircleFill} />
                <Text>Garage: {detail?.garage}</Text>
              </HStack>
            </Stack>
            <Stack alignItems="left"></Stack>
          </HStack>
        </Stack>
        <Stack gap={3}>
          <Stack>
            <Text bg="red.500" fontSize="2xl" textAlign="center" color="white">
              CONSULTA POR ESTA PROPIEDAD
            </Text>
          </Stack>

          {/* {{ base: "red.500", lg: "blue" }} */}
          <form className="formDetail" onSubmit={handleSubmit(onSubmit)}>
            <Stack w={{ base: "20em", lg: "60em" }} gap={3}>
              <HStack w=" 100% ">
                <Icon color="red.500" boxSize="1.5em" as={BsFillPeopleFill} />
                <Input
                  placeholder="Nombre y apellido"
                  type="text"
                  variant="filled"
                  required
                />
              </HStack>
              <HStack w=" 100% ">
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
              <HStack w=" 100% ">
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
              <HStack w=" 100% ">
                <Icon
                  color="red.500"
                  boxSize="1.5em"
                  as={BsChatRightDotsFill}
                />
                <Textarea
                  variant="filled"
                  placeholder="Deje aqui su comentario:"
                  {...register("comentarios", {
                    required: true,
                    minLength: 8,
                  })}
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
