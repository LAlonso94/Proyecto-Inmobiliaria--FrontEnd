import React, { useState } from "react";
import "../Header/Header.css";

import {
  Menu,
  Checkbox,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  WrapItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Company from "../Company/Company";

function Header() {
  return (
    <div>
      <header className="headerContainer">
        <WrapItem>
          <Button colorScheme="gray" color="red " variant="solid">
            ENCONTRÁ TU NUEVA CASA O APARTAMENTO
          </Button>
        </WrapItem>

        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                color="red"
                isActive={isOpen}
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                {isOpen ? "Operación" : "Operación"}
              </MenuButton>
              <MenuList>
                <MenuItem>Alquiler</MenuItem>
                <MenuItem>Venta</MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                color="red"
                isActive={isOpen}
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                {isOpen ? "Propiedad" : "Propiedades"}
              </MenuButton>
              <MenuList>
                <MenuItem>Casa</MenuItem>
                <MenuItem>Apartamento</MenuItem>
                <MenuItem>Local Comercial</MenuItem>
                <MenuItem>Local Industrial</MenuItem>
                <MenuItem>Terrenos</MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                color="red"
                isActive={isOpen}
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                {isOpen ? "Departamento" : "Departamento"}
              </MenuButton>
              <MenuList>
                <MenuItem>Canelones</MenuItem>
                <MenuItem>Maldonado</MenuItem>
                <MenuItem>Montevideo</MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </header>
      <hr className="hr"></hr>

      <Company />
    </div>
  );
}

export default Header;
