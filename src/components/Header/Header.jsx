import React, { useState } from "react";
import "../Header/Header.css";
import { Button, WrapItem, Input } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

function Header() {
  return (
    <div>
      <header className="header">
        <WrapItem>
          <Button colorScheme="gray" color="red " variant="solid">
            ENCONTRÁ TU NUEVA CASA O APARTAMENTO
          </Button>
        </WrapItem>
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
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
    </div>
  );
}

export default Header;
