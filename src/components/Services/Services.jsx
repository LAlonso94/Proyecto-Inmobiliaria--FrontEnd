import React from "react";
import {
  Stack,
  Text,
  Image,
  Box,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  VStack,
} from "@chakra-ui/react";
function Services() {
  return (
    <div>
      <a id="services" />
      <Box w="100%" h="0.5em" bg="red.500" />
      <Flex display={["none", "none", "flex", "flex"]}>
        <Stack w="100%" m="3em" spacing={8}>
          <Text textAlign="center" fontSize={{ base: "2xl", lg: "4xl" }} as="b">
            SERVICIOS
          </Text>
          <Stack direction="row">
            <Stack w="48%" direction="column">
              <Stack gap={5} direction="row">
                <Image
                  objectFit="contain"
                  src="/public/prestamos.jpg"
                  alt="Dan Abramov"
                />
                <Stack boxSize="auto">
                  <Text fontSize="l" as="b">
                    PRESTAMOS INMOBILIARIOS
                  </Text>
                  <Text>
                    "Su casa propia mediante préstamo hipotecario." Buscamos la
                    vivienda acorde a sus necesidades por medio de préstamo
                    hipotecario, contamos con profesionales en la materia.
                  </Text>
                </Stack>
              </Stack>
              <Stack gap={5} direction="row">
                <Image
                  objectFit="contain"
                  src="/public/alquileres.jpg"
                  alt="Dan Abramov"
                />
                <Stack>
                  <Text boxSize="auto" fontSize="xl" as="b">
                    ALQUILERES
                  </Text>
                  <Text>
                    Gestión integral del arrendamiento urbano en destino casa
                    habitación, comercio u otros destinos, brindándole al
                    propietario su renta sin complicaciones.
                  </Text>
                </Stack>
              </Stack>
            </Stack>
            <Stack w="48%" direction="column">
              <Stack gap={5} direction="row">
                <Image
                  objectFit="contain"
                  src="/public/ventas.jpg"
                  alt="Dan Abramov"
                />
                <Stack boxSize="auto">
                  <Text fontSize="xl" as="b">
                    VENTAS
                  </Text>
                  <Text>
                    Ofrecemos a nuestros clientes un servicio completo para que
                    confié en nosotros como Agente Inmobiliario para vender su
                    propiedad y/o para quien busca comprar.
                  </Text>
                </Stack>
              </Stack>
              <Stack gap={5} direction="row">
                <Image
                  objectFit="contain"
                  src="/public/alquileres.jpg"
                  alt="Dan Abramov"
                />
                <Stack>
                  <Text boxSize="auto" fontSize="xl" as="b">
                    TASACIONES
                  </Text>
                  <Text>
                    Desde la experiencia practica que nos abala, le ofrecemos
                    una tasación a su propiedad tomando en cuenta el valor del
                    mercado, buscando la mayor productividad de su bien.
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Flex>
      <Flex flexDirection="column" display={["flex", "flex", "none", "none"]}>
        <Stack>
          <Text
            pt="1.5em"
            textAlign="center"
            color="red.500"
            fontSize="lg"
            as="b"
          >
            SERVICIOS
          </Text>
        </Stack>
        <Accordion pl="1.5em" pr="1.5em" allowToggle>
          <AccordionItem>
            <Stack mt="50" gap={5} direction="row">
              <Image
                boxSize={{ base: "20%", lg: "50%" }}
                objectFit="cover"
                src="/public/prestamos.jpg"
                alt="Dan Abramov"
              />
              <AccordionButton>
                <Box fontSize="sm" color="red.500" flex="1" textAlign="left">
                  PRESTAMOS INMOBILIARIOS
                </Box>
                <AccordionIcon color="red.500" />
              </AccordionButton>
            </Stack>

            <AccordionPanel fontSize="small" pb={4}>
              "Su casa propia mediante préstamo hipotecario." Buscamos la
              vivienda acorde a sus necesidades por medio de préstamo
              hipotecario, contamos con profesionales en la materia.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion pl="1.5em" pr="1.5em" allowToggle>
          <AccordionItem>
            <Stack mt="50" gap={5} direction="row">
              <Image
                boxSize={{ base: "20%", lg: "50%" }}
                objectFit="cover"
                src="/public/alquileres.jpg"
                alt="Dan Abramov"
              />
              <AccordionButton>
                <Box fontSize="sm" color="red.500" flex="1" textAlign="left">
                  ALQUILERES
                </Box>
                <AccordionIcon color="red.500" />
              </AccordionButton>
            </Stack>

            <AccordionPanel fontSize="small" pb={4}>
              Gestión integral del arrendamiento urbano en destino casa
              habitación, comercio u otros destinos, brindándole al propietario
              su renta sin complicaciones.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion pl="1.5em" pr="1.5em" allowToggle>
          <AccordionItem>
            <Stack mt="50" gap={5} direction="row">
              <Image
                boxSize={{ base: "20%", lg: "50%" }}
                objectFit="cover"
                src="/public/ventas.jpg"
                alt="Dan Abramov"
              />
              <AccordionButton>
                <Box fontSize="sm" color="red.500" flex="1" textAlign="left">
                  VENTAS
                </Box>
                <AccordionIcon color="red.500" />
              </AccordionButton>
            </Stack>

            <AccordionPanel fontSize="small" pb={4}>
              Ofrecemos a nuestros clientes un servicio completo para que confié
              en nosotros como Agente Inmobiliario para vender su propiedad y/o
              para quien busca comprar. Gestión del negocio inmobiliario, con el
              debido asesoramiento previo y durante el procedimiento de la
              venta, que nos caracteriza.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion pb="1.5em" pl="1.5em" pr="1.5em" allowToggle>
          <AccordionItem>
            <Stack mt="50" gap={5} direction="row">
              <Image
                boxSize={{ base: "20%", lg: "50%" }}
                objectFit="cover"
                src="/public/tasaciones.jpg"
                alt="Dan Abramov"
              />
              <AccordionButton>
                <Box fontSize="sm" color="red.500" flex="1" textAlign="left">
                  TASACIONES
                </Box>
                <AccordionIcon color="red.500" />
              </AccordionButton>
            </Stack>

            <AccordionPanel fontSize="small" pb={4}>
              Desde la experiencia practica que nos abala, le ofrecemos una
              tasación a su propiedad tomando en cuenta el valor del mercado,
              buscando la mayor productividad de su bien.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    </div>
  );
}

export default Services;
