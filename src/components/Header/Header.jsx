import React, { useState } from "react";
import "../Header/Header.css";
import { SearchIcon } from "@chakra-ui/icons";
import { Menu, Stack, Text, Select, IconButton } from "@chakra-ui/react";

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
    <div>
      <header className="headerContainer">
        <Text fontSize="3xl" as="b" color="white">
          ENCONTRÁ TU NUEVA CASA O APARTAMENTO
        </Text>
        <Stack gap={5} spacing="0" flexDirection="row">
          <Menu>
            <Select
              size="lg"
              bg="white"
              color="red"
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
              color="red"
              placeholder="Propiedad"
              onChange={handleTipo}
            >
              <option value="Apartamento">Apartamento</option>
              <option value="Casa">Casa</option>
              <option value="localComercial">Local Comercial</option>
              <option value="localIndustrial">Local Industrial</option>
              <option value="terrenos">Terrenos</option>
            </Select>
            <Select
              size="lg"
              bg="white"
              color="red"
              placeholder="Departamento"
              onChange={handleDepartamento}
            >
              <option value="Canelones">Canelones</option>
              <option value="Maldonado">Maldonado</option>
              <option value="Montevideo">Montevideo</option>
            </Select>
            <IconButton
              color="red"
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
      </header>
      <hr className="hr"></hr>
    </div>
  );
}

export default Header;
