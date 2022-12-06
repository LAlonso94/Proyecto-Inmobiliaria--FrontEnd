import React, { useState } from "react";
import Select from "../../components/Select/Select";
import DeleteEstate from "../../components/Delete/DeleteEstate";

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
import EditEstate from "../../components/Edit/EditEstate";
import SearchId from "../../components/SearchId/SearchId";
import AddEstate from "../../components/Add/AddEstate";

function Admin() {
  const [selectObject, setSelectObject] = useState({
    searchId: false,
    addEstate: false,
    editEstate: false,
    deleteEstate: false,
  });
  console.log(selectObject);
  return (
    <div>
      <Select selectObject={selectObject} setSelectObject={setSelectObject} />
      {selectObject.searchId && <SearchId />}
      {selectObject.addEstate && <AddEstate />}
      {selectObject.editEstate && <EditEstate />}
      {selectObject.deleteEstate && <DeleteEstate />}
    </div>
  );

  /* <Menu>
        <MenuButton
          as={Button}
          aria-label="Options"
          icon={<SettingsIcon />}
          variant="ghost"
        >
          ADMINISTRAR
        </MenuButton>
        <MenuList>
          <MenuItem color="red" icon={<SearchIcon />}>
            <Button colorScheme="red">Buscar</Button>
          </MenuItem>
          <MenuItem color="red" icon={<AddIcon />}>
            <Button colorScheme="red">Agregar</Button>
          </MenuItem>
          <MenuItem color="red" icon={<EditIcon />}>
            <Button colorScheme="red">Editar</Button>
          </MenuItem>
          <MenuItem color="red" icon={<DeleteIcon />}>
            <Button colorScheme="red">Eliminar</Button>
          </MenuItem>
        </MenuList>
      </Menu> */
}

export default Admin;
