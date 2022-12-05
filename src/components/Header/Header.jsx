import React, { useState } from "react";
import "../Header/Header.css";
import { SearchIcon } from "@chakra-ui/icons";
import { Menu, Stack, Text, Select, IconButton } from "@chakra-ui/react";

import Company from "../Company/Company";
import Footer from "../Footer/Footer";

function Header() {
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
            >
              <option value="option1">Alquiler</option>
              <option value="option2">Venta</option>
            </Select>
            <Select size="lg" bg="white" color="red" placeholder="Propiedad">
              <option value="option1">Apartamento</option>
              <option value="option2">Casa</option>
              <option value="option2">Local Comercial</option>
              <option value="option2">Local Industrial</option>
              <option value="option2">Terrenos</option>
            </Select>
            <Select size="lg" bg="white" color="red" placeholder="Departamento">
              <option value="option1">Canelones</option>
              <option value="option2">Maldonado</option>
              <option value="option2">Montevideo</option>
            </Select>
            <IconButton
              color="red"
              size="lg"
              aria-label="Search database"
              icon={<SearchIcon />}
            />
          </Menu>
        </Stack>
      </header>
      <hr className="hr"></hr>

      <Company />
      <Footer />
    </div>
  );
}

export default Header;
