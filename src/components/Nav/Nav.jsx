import React from "react";
import "../Nav/Nav.css";
import Admin from "../Admin/Admin";
import { Button, WrapItem, Wrap } from "@chakra-ui/react";
import Services from "../Services/Services";
function Nav() {
  return (
    <div>
      <nav className="nav">
        <Wrap spacing={4}>
          <WrapItem>
            <Button variant="ghost">INICIO</Button>
            <Button variant="ghost">EMPRESA</Button>
            <Services />
            <Button variant="ghost">ESTUDIO</Button>
            <Button variant="ghost">CONTACTO</Button>
            <Admin />
          </WrapItem>
        </Wrap>
      </nav>
    </div>
  );
}

export default Nav;
