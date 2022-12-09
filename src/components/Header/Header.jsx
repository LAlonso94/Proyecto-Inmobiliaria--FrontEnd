import React, { useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { Menu, Stack, Text, Select, IconButton, Box } from "@chakra-ui/react";

function Header(props) {
  const [operacion, setOperacion] = useState("");
  const [tipo, setTipo] = useState("");
  const [departamento, setDepartamento] = useState("");

  const handleOperacion = (e) => {
    setOperacion(e.target.value);
  };
  const handleTipo = (e) => {
    setTipo(e.target.value);
  };
  const handleDepartamento = (e) => {
    setDepartamento(e.target.value);
  };

  const credentials = {
    operacion: operacion,
    tipo: tipo,
    departamento: departamento,
  };

  return (
    <>
      <header
        style={{
          display: "flex",
          backgroundImage: "url(/public/foto.jpg)",
          alignItems: "center",
          flexDirection: "column",
          backgroundSize: "cover",
        }}
      >
        <Stack
          gap="8"
          p={{ base: "0em", lg: "2em" }}
          h={{ base: "45vh", lg: "60vh" }}
          w="auto"
        >
          <Text
            pt={{ base: "8" }}
            fontSize={{ base: "1xl", lg: "3xl" }}
            as="b"
            color="white"
            alignItems="center"
            textShadow="2px 2px 5px black"
          >
            ENCONTRÁ TU NUEVA CASA O APARTAMENTO
          </Text>
          <Stack
            gap={{ base: "1em", lg: "3em" }}
            spacing="0"
            flexDirection={{ base: "column", lg: "row" }}
          >
            <Menu>
              <Select
                size="lg"
                bg="white"
                color="red.500"
                placeholder="Operación"
                variant="link"
                onChange={handleOperacion}
              >
                <option value="Alquiler">Alquiler</option>
                <option value="Venta">Venta</option>
              </Select>
              <Select
                size="lg"
                bg="white"
                color="red.500"
                placeholder="Propiedad"
                onChange={handleTipo}
              >
                <option value="Apartamento">Apartamento</option>
                <option value="Casa">Casa</option>
                <option value="Local comercial">Local Comercial</option>
                <option value="Local industrial">Local Industrial</option>
                <option value="Terreno">Terrenos</option>
              </Select>
              <Select
                size="lg"
                bg="white"
                color="red.500"
                placeholder="Departamento"
                onChange={handleDepartamento}
              >
                <option value="Canelones">Canelones</option>
                <option value="Maldonado">Maldonado</option>
                <option value="Montevideo">Montevideo</option>
              </Select>
              <IconButton
                color="red.500"
                size="lg"
                aria-label="Search database"
                icon={<SearchIcon />}
                //El onClick debe ejecutar la llamada del backend
                onClick={() => {
                  props.filterEstates(credentials);
                }}
              />
            </Menu>
          </Stack>
        </Stack>
      </header>
      <Box w="100%" h="0.5em" bg="red.500" />
    </>
  );
}

export default Header;
