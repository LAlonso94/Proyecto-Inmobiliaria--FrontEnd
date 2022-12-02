import React from "react";
import "./Admin.css";
import Add from "../../components/Add/Add";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";
import {
  SearchIcon,
  AddIcon,
  EditIcon,
  DeleteIcon,
  SettingsIcon,
} from "@chakra-ui/icons";

function Admin() {
  return (
    <div>
      <Menu>
        <MenuButton
          as={Button}
          aria-label="Options"
          icon={<SettingsIcon />}
          variant="outline"
        >
          Administrar
        </MenuButton>
        <MenuList>
          <MenuItem icon={<SearchIcon />}>
            <Button colorScheme="red">Buscar</Button>
          </MenuItem>
          <MenuItem icon={<AddIcon />}>
            <Button colorScheme="red">Agregar</Button>
          </MenuItem>
          <MenuItem icon={<EditIcon />}>
            <Button colorScheme="red">Editar</Button>
          </MenuItem>
          <MenuItem icon={<DeleteIcon />}>
            <Button colorScheme="red">Eliminar</Button>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}

export default Admin;
