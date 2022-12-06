import React from "react";
import "../Footer/Footer.css";
import {
  Icon,
  Stack,
  Text,
  Input,
  Button,
  Textarea,
  Box,
} from "@chakra-ui/react";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { useForm } from "react-hook-form";
import {
  BsTelephoneFill,
  BsFillEnvelopeFill,
  BsHouseFill,
  BsFillPeopleFill,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";

function Footer() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="container">
      <Box w="100%" h="0.5em" bg="red.500" />
      <Stack justifyContent="space-between" p="1.5em" direction="row" bg="gray">
        {/* <Stack p="1.5em" bg="gray"> */}
        <Stack>
          <Stack>
            <Text color="white" fontSize="3xl" as="b">
              Contacto
            </Text>
          </Stack>
          <Stack color="white" w=" 20em " direction="row">
            <Icon boxSize="1.5em" as={BsHouseFill} />
            <Text> Rivera 641 Las Piedras-Canelones, Uruguay</Text>
          </Stack>
          <Stack color="white" direction="row">
            <Icon boxSize="1.5em" as={BsFillEnvelopeFill} />
            <Text>contacto@inmobiliariarossi.com.uy</Text>
          </Stack>
          <Stack color="white" direction="row">
            <Icon boxSize="1.5em" as={BsTelephoneFill} />
            <Text> 23656520</Text>
          </Stack>

          <Stack color="white" w=" 20em " direction="row">
            <Icon boxSize="1.5em" as={BsFillPeopleFill} />
            <Text>Atención al público: lunes a jueves 14:30hs a 18hs</Text>
          </Stack>
        </Stack>
        <Stack>
          <iframe
            className="maps"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1639.5425558933127!2d-56.216805848023995!3d-34.72824895732258!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x848e17c49b5997e6!2sInmobiliaria%20Rossi%20-%20Estudio%20Integral%20Rossi!5e0!3m2!1ses-419!2suy!4v1670100367298!5m2!1ses-419!2suy"
            width="340"
            height="300"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Stack>
        <Stack className="form" justifyContent="center">
          <Stack justifyContent="center" gap={5} direction="row ">
            <Stack>
              <Icon color="white" boxSize="2em" as={BsWhatsapp} />
            </Stack>
            <Stack>
              <Icon color="white" boxSize="2em" as={AiFillFacebook} />
            </Stack>
            <Stack>
              <Icon color="white" boxSize="2em" as={AiFillInstagram} />
            </Stack>
            <Stack>
              <Icon color="white" boxSize="2em" as={BsTwitter} />
            </Stack>
          </Stack>
          <Stack>
            <Text as="b" color="white">
              Comentarios y/o sugerencias:
            </Text>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                placeholder="Nombre y apellido"
                type="text"
                variant="filled"
                required
              />

              <Input
                m={2}
                variant="filled"
                placeholder="Correo electronico:"
                type="email"
                required
                {...register("email", { required: true, minLength: 8 })}
              />
              <Textarea
                variant="filled"
                placeholder="Deje aqui su comentario"
              ></Textarea>

              <Button
                m={2}
                className="buttonLogin"
                colorScheme="red"
                mb={8}
                type="submit"
              >
                Enviar
              </Button>
            </form>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
}

export default Footer;
