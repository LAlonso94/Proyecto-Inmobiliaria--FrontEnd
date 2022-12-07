import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import {
  SearchIcon,
  AddIcon,
  EditIcon,
  DeleteIcon,
  SettingsIcon,
} from "@chakra-ui/icons";
function Services() {
  return (
    <div>
      <Menu>
        <MenuButton
          as={Button}
          aria-label="Options"
          icon={<SettingsIcon />}
          variant="solid"
          colorScheme="red"
        >
          SERVICIOS
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Button colorScheme="red">Prestamo Inmobiliario</Button>
          </MenuItem>
          <MenuItem>
            <Button colorScheme="red">Alquileres</Button>
          </MenuItem>
          <MenuItem>
            <Button colorScheme="red">Ventas</Button>
          </MenuItem>
          <MenuItem>
            <Button colorScheme="red">Tasaciones</Button>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}

export default Services;
