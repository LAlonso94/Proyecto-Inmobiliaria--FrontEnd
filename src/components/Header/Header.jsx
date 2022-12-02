import React from "react";
import "../Header/Header.css";
import { Button, WrapItem, Input } from "@chakra-ui/react";

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
      </header>
    </div>
  );
}

export default Header;
