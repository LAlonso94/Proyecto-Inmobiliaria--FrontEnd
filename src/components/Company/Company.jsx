import React from "react";
import { Stack, Text, Image, Box } from "@chakra-ui/react";
import "../Company/Company.css";

function Company() {
  return (
    <div>
      <Box w="100%" h="0.5em" bg="red.500" />
      <Stack m="3em" direction="row" spacing={10} w=" 90em ">
        <Stack className="section1">
          <Text textAlign="center" fontSize="4xl" as="b">
            LA EMPRESA
          </Text>

          <Text>
            "INMOBILIARIA ROSSI" se fundo en la ciudad de Las Piedras con larga
            experiencia dentro de la localidad y en sus alrededores, comenzamos
            en el año 1990 con la tercera generación Henry Edison ROSSI PASINA.
          </Text>
          <Text>
            Somos una empresa familiar que busca dar un trato directo,
            personalizado y profesional al cliente dentro del mercado
            inmobiliario, dedicados a la venta, alquiler y administración de
            propiedades; impulsamos y acompañamos emprendimientos inmobiliarios,
            proyectos de inversión, fraccionamientos y construcción.
          </Text>
          <Image
            className="imageCompany"
            boxSize="100%"
            objectFit="cover"
            src="../public/Rossi.jpeg"
            alt="Dan Abramov"
          />
        </Stack>

        <Stack spacing={8} className="skills">
          <Stack mt="50" gap={5} direction="row">
            <Image
              mt="5"
              boxSize="70px"
              objectFit="cover"
              src="/public/icons1.png"
              alt="Dan Abramov"
            />
            <Stack>
              <Text fontSize="xl" as="b">
                Experiencia
              </Text>
              <Text>
                Contamos con amplia trayectoria en el rubro inmobiliario, que
                pretende darle las mejores soluciones para usted, asesorándolo y
                acompañándolo en la toma de decisiones.{" "}
              </Text>
            </Stack>
          </Stack>
          <Stack gap={5} direction="row">
            <Image
              mt="5"
              boxSize="70px"
              objectFit="cover"
              src="/public/icons2.png"
              alt="Dan Abramov"
            />
            <Stack>
              <Text fontSize="xl" as="b">
                Gestión integral
              </Text>
              <Text>
                Contamos con profesionales que nos permiten un amplio
                asesoramiento notarial, jurídico y contable, para brindarle un
                servicio integral.
              </Text>
            </Stack>
          </Stack>
          <Stack gap={5} direction="row">
            <Image
              mt="5"
              boxSize="70px"
              objectFit="cover"
              src="/public/icons3.png"
              alt="Dan Abramov"
            />
            <Stack>
              <Text fontSize="xl" as="b">
                Misión
              </Text>
              <Text>
                "Respaldo, seguridad y confianza" Ofrecemos un servicio
                integral, profesional y serio, logrando el objetivo propuesto al
                cliente.
              </Text>
            </Stack>
          </Stack>
          <Stack gap={5} direction="row">
            <Image
              mt="5"
              boxSize="70px"
              objectFit="cover"
              src="/public/icons4.png"
              alt="Dan Abramov"
            />
            <Stack>
              <Text fontSize="xl" as="b">
                Visión
              </Text>
              <Text>
                Iniciamos un proyecto familiar que prosperó, destacándose por su
                seriedad, compromiso e impronta particular. Hoy nos siguen
                acompañando los clientes más antiguos y sus generaciones así
                como otros más que se han ido sumando a nuestro compromiso y
                trabajo.
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
}

export default Company;
