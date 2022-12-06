import React from "react";
import "../Detail/detail.css";
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
} from "react-icons/bs";

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

  const [detail, setDetail] = useState([]);

  const detailEstate = async (id) => {
    await Rule_Estates.getSearchId(id)
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
    detailEstate();
  }, []);

  return (
    <div>
      <Stack ml="5em" pr="5em" gap={6}>
        <Stack>
          <Text
            alignItems="center"
            bg="red.500"
            fontSize="2xl"
            textAlign="center"
            color="white"
          >
            {item.operacion}
            OPERACION
            {item.tipo}
          </Text>
        </Stack>
        <Stack pr="15em" pl="15em">
          <Carousel>
            <div>
              <img src="https://inmobiliariarossi.com.uy/image/iWhatsApp%20Image%202022-10-20%20at%2020.09.45%20(4).jpeg" />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img src="https://inmobiliariarossi.com.uy/image/i311704147_1803511309991154_6805421820029665669_noo.jpg" />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img src="https://inmobiliariarossi.com.uy/image/i309425992_1803541783321440_8836522809821014496_n.jpg" />
              <p className="legend">Legend 3</p>
            </div>
            <div>
              <img src="https://inmobiliariarossi.com.uy/image/iWhatsApp%20Image%202022-10-20%20at%2020.09.45%20(3).jpeg" />
              <p className="legend">Legend 4</p>
            </div>
            <div>
              <img src="https://inmobiliariarossi.com.uy/image/iWhatsApp%20Image%202022-10-20%20at%2020.09.45.jpeg" />
              <p className="legend">Legend 5</p>
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
            CARACTERíSTICAS
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
