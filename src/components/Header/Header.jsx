import React, { useState } from "react";
import "../Header/Header.css";
import { SearchIcon } from "@chakra-ui/icons";
import { Menu, Stack, Text, Select, IconButton } from "@chakra-ui/react";

function Header(props) {
  const handleSubmit = (e) => {
    props.search(e.target.value.toLowerCase());
  };
  console.log(handleSubmit);
  return (
    <div>
      <header className="headerContainer">
        <Text fontSize="3xl" as="b" color="white">
          ENCONTRÁ TU NUEVA CASA O APARTAMENTO
        </Text>
        <form onSubmit={handleSubmit} action="">
          <Stack gap={5} spacing="0" flexDirection="row">
            <Menu>
              <Select
                size="lg"
                bg="white"
                color="red"
                placeholder="Operación"
                variant="link"
              >
                <option value="Alquiler">Alquiler</option>
                <option value="Venta">Venta</option>
              </Select>
              <Select size="lg" bg="white" color="red" placeholder="Propiedad">
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
                type="submit"
              />
            </Menu>
          </Stack>
        </form>
      </header>
      <hr className="hr"></hr>
    </div>
  );
}

export default Header;
