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
} from "@chakra-ui/react";

function Company() {
  return (
    <div>
      <a id="company" />
      <Box w="auto" h="0.5em" bg="red.500" />
      <Flex display={["none", "none", "flex", "flex"]}>
        <Stack m="3em" direction={{ base: "column", lg: "row" }} spacing={10}>
          <Stack>
            <Text
              textAlign="center"
              fontSize={{ base: "2xl", lg: "4xl" }}
              as="b"
            >
              LA EMPRESA
            </Text>

            <Text>
              "INMOBILIARIA ROSSI" se fundo en la ciudad de Las Piedras con
              larga experiencia dentro de la localidad y en sus alrededores,
              comenzamos en el año 1990 con la tercera generación Henry Edison
              ROSSI PASINA.
            </Text>
            <Text>
              Somos una empresa familiar que busca dar un trato directo,
              personalizado y profesional al cliente dentro del mercado
              inmobiliario, dedicados a la venta, alquiler y administración de
              propiedades; impulsamos y acompañamos emprendimientos
              inmobiliarios, proyectos de inversión, fraccionamientos y
              construcción.
            </Text>
            <Image
              display={{ base: "none", lg: "flex" }}
              boxSize="100%"
              objectFit="cover"
              src="../public/Rossi.jpeg"
              alt="Dan Abramov"
            />
          </Stack>

          <Stack spacing={8} className="skills">
            <Stack mt="50" gap={5} direction="row" h="15vh">
              <Image
                mt="5"
                boxSize="70px"
                objectFit="contain"
                src="/public/icons1.png"
                alt="Dan Abramov"
                w="15%"
                h="100%"
              />
              <Stack w="85%">
                <Text fontSize="xl" as="b">
                  Experiencia
                </Text>
                <Text fontSize={{ base: "sm" }}>
                  Contamos con amplia trayectoria en el rubro inmobiliario, que
                  pretende darle las mejores soluciones para usted, asesorándolo
                  y acompañándolo en la toma de decisiones.{" "}
                </Text>
              </Stack>
            </Stack>
            <Stack gap={5} direction="row" h="15vh">
              <Image
                mt="5"
                boxSize={{ base: "20%", lg: "70px" }}
                objectFit="contain"
                src="/public/icons2.png"
                alt="Dan Abramov"
                w="15%"
                h="100%"
              />
              <Stack w="85%">
                <Text fontSize="xl" as="b">
                  Gestión integral
                </Text>
                <Text fontSize={{ base: "sm" }}>
                  Contamos con profesionales que nos permiten un amplio
                  asesoramiento notarial, jurídico y contable, para brindarle un
                  servicio integral.
                </Text>
              </Stack>
            </Stack>
            <Stack gap={5} direction="row" h="15vh">
              <Image
                mt="5"
                boxSize={{ base: "20%", lg: "70px" }}
                objectFit="contain"
                src="/public/icons3.png"
                alt="Dan Abramov"
                w="15%"
                h="100%"
              />
              <Stack w="85%">
                <Text fontSize="xl" as="b">
                  Misión
                </Text>
                <Text fontSize={{ base: "sm" }}>
                  "Respaldo, seguridad y confianza" Ofrecemos un servicio
                  integral, profesional y serio, logrando el objetivo propuesto
                  al cliente.
                </Text>
              </Stack>
            </Stack>
            <Stack gap={5} direction="row" h="15vh">
              <Image
                mt="5"
                boxSize={{ base: "20%", lg: "70px" }}
                objectFit="contain"
                src="/public/icons4.png"
                alt="Dan Abramov"
                w="15%"
                h="100%"
              />
              <Stack w="85%">
                <Text fontSize="xl" as="b">
                  Visión
                </Text>
                <Text fontSize={{ base: "sm" }}>
                  Iniciamos un proyecto familiar que prosperó, destacándose por
                  su seriedad, compromiso e impronta particular. Hoy nos siguen
                  acompañando los clientes más antiguos y sus generaciones así
                  como otros más que se han ido sumando a nuestro compromiso y
                  trabajo.
                </Text>
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
            LA EMPRESA
          </Text>

          <Text pl="1.5em" pr="1.5em" fontSize="small">
            "INMOBILIARIA ROSSI" se fundo en la ciudad de Las Piedras con larga
            experiencia dentro de la localidad y en sus alrededores, comenzamos
            en el año 1990 con la tercera generación Henry Edison ROSSI PASINA.
          </Text>
          <Text pl="1.5em" pr="1.5em" fontSize="small">
            Somos una empresa familiar que busca dar un trato directo,
            personalizado y profesional al cliente dentro del mercado
            inmobiliario, dedicados a la venta, alquiler y administración de
            propiedades; impulsamos y acompañamos emprendimientos inmobiliarios,
            proyectos de inversión, fraccionamientos y construcción.
          </Text>
          <Image
            pl="1.5em"
            pr="1.5em"
            objectFit="cover"
            src="../public/Rossi.jpeg"
            alt="Dan Abramov"
          />
        </Stack>
        <Accordion pl="1.5em" pr="1.5em" allowToggle>
          <AccordionItem>
            <Stack mt="50" gap={5} direction="row">
              <Image
                boxSize={{ base: "20%", lg: "50%" }}
                objectFit="cover"
                src="/public/icons1.png"
                alt="Dan Abramov"
              />
              <AccordionButton>
                <Box
                  textTransform="uppercase"
                  fontSize="sm"
                  color="red.500"
                  flex="1"
                  textAlign="left"
                >
                  Experiencia
                </Box>
                <AccordionIcon color="red.500" />
              </AccordionButton>
            </Stack>

            <AccordionPanel fontSize="small" pb={4}>
              Contamos con amplia trayectoria en el rubro inmobiliario, que
              pretende darle las mejores soluciones para usted, asesorándolo y
              acompañándolo en la toma de decisiones.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion pl="1.5em" pr="1.5em" allowToggle>
          <AccordionItem>
            <Stack mt="50" gap={5} direction="row">
              <Image
                boxSize={{ base: "20%", lg: "50%" }}
                objectFit="cover"
                src="/public/icons2.png"
                alt="Dan Abramov"
              />
              <AccordionButton>
                <Box
                  textTransform="uppercase"
                  fontSize="sm"
                  color="red.500"
                  flex="1"
                  textAlign="left"
                >
                  Gestión integral
                </Box>
                <AccordionIcon color="red.500" />
              </AccordionButton>
            </Stack>

            <AccordionPanel fontSize="small" pb={4}>
              Contamos con profesionales que nos permiten un amplio
              asesoramiento notarial, jurídico y contable, para brindarle un
              servicio integral.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion pl="1.5em" pr="1.5em" allowToggle>
          <AccordionItem>
            <Stack mt="50" gap={5} direction="row">
              <Image
                boxSize={{ base: "20%", lg: "50%" }}
                objectFit="cover"
                src="/public/icons3.png"
                alt="Dan Abramov"
              />
              <AccordionButton>
                <Box
                  textTransform="uppercase"
                  fontSize="sm"
                  color="red.500"
                  flex="1"
                  textAlign="left"
                >
                  Misión
                </Box>
                <AccordionIcon color="red.500" />
              </AccordionButton>
            </Stack>

            <AccordionPanel fontSize="small" pb={4}>
              "Respaldo, seguridad y confianza" Ofrecemos un servicio integral,
              profesional y serio, logrando el objetivo propuesto al cliente.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion pb="1.5em" pl="1.5em" pr="1.5em" allowToggle>
          <AccordionItem>
            <Stack mt="50" gap={5} direction="row">
              <Image
                boxSize={{ base: "20%", lg: "50%" }}
                objectFit="cover"
                src="/public/icons4.png"
                alt="Dan Abramov"
              />
              <AccordionButton>
                <Box
                  textTransform="uppercase"
                  fontSize="sm"
                  color="red.500"
                  flex="1"
                  textAlign="left"
                >
                  Visión
                </Box>
                <AccordionIcon color="red.500" />
              </AccordionButton>
            </Stack>

            <AccordionPanel fontSize="small" pb={4}>
              Iniciamos un proyecto familiar que prosperó, destacándose por su
              seriedad, compromiso e impronta particular. Hoy nos siguen
              acompañando los clientes más antiguos y sus generaciones así como
              otros más que se han ido sumando a nuestro compromiso y trabajo.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    </div>
  );
}

export default Company;
