import React, { useEffect, useState } from "react";
import "../Nav/Nav.css";
import { Button, WrapItem, Wrap } from "@chakra-ui/react";
import Services from "../Services/Services";
import { Link } from "react-router-dom";
import { isAuth } from "../../api/Rule_auth_users";

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
            {isAuth() ? (
              <Link to={"/administrar"}>
                <Button variant="ghost">ADMINISTRAR</Button>
              </Link>
            ) : (
              <Link to={"/login"}>
                <Button variant="ghost">LOGIN</Button>
              </Link>
            )}
          </WrapItem>
        </Wrap>
      </nav>
    </div>
  );
}

export default Nav;
