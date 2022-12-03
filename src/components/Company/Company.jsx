import React from "react";
import { Stack, Text, Image } from "@chakra-ui/react";
import "../Company/Company.css";

function Company() {
  return (
    <div className="companyText">
      <Stack w=" 40em ">
        <Text color="red" textAlign="center" fontSize="4xl" as="b">
          LA EMPRESA
        </Text>

        <Text textAlign="center">
          "INMOBILIARIA ROSSI" es una empresa que fundamos en la ciudad de Las
          Piedras con larga experiencia dentro de la localidad y en sus
          alrededores, comenzamos por el año 1990 con la tercera generación
          Henry Edison ROSSI PASINA. Somos una empresa familiar que busca dar un
          trato directo, personalizado y profesional al cliente. Somos una
          empresa en el mercado inmobiliario, dedicada a la venta, alquiler y
          administración de propiedades; impulsamos y acompañamos
          emprendimientos inmobiliarios, proyectos de inversión,
          fraccionamientos y construcción.
        </Text>

        <Stack className="skills">
          <Text fontSize="xl" as="b">
            Experiencia
          </Text>
          <Text>
            Contamos con amplia trayectoria en el rubro inmobiliario, que
            pretende darle las mejores soluciones para usted, asesorándolo y
            acompañándolo en la toma de decisiones.{" "}
          </Text>

          <Text fontSize="xl" as="b">
            Gestión integral
          </Text>
          <Text>
            Además tenemos profesionales que nos permiten un amplio
            asesoramiento notarial, jurídico y contable, para brindarle un
            servicio integral.
          </Text>

          <Text fontSize="xl" as="b">
            Misión
          </Text>
          <Text>
            Respaldo, seguridad y confianza; Ofrecemos un servicio integral,
            profesional y serio, logrando el objetivo propuesto al cliente.-
          </Text>

          <Text fontSize="xl" as="b">
            Visión
          </Text>
          <Text>
            Iniciamos un proyecto familiar que prosperó, destacándose por su
            seriedad, compromiso e impronta particular. Hoy nos siguen
            acompañando los clientes más antiguos y sus generaciones así como
            otros más que se han ido sumando a nuestro compromiso y trabajo.-
          </Text>
        </Stack>
      </Stack>
    </div>
  );
}

export default Company;
