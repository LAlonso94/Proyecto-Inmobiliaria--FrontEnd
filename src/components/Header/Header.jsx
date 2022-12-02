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
          <Button colorScheme="red" variant="solid">
            ALQUILER
          </Button>
          <Button colorScheme="red" variant="solid">
            VENTA
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
                {isOpen ? "Close" : "Open"}
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem onClick={() => alert("Kagebunshin")}>
                  Create a Copy
                </MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </header>
    </div>
  );
}

export default Header;
