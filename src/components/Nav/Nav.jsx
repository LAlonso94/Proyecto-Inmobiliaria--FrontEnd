import React, { useEffect, useState } from "react";

import {
  Button,
  WrapItem,
  Wrap,
  HStack,
  Image,
  Box,
  Stack,
} from "@chakra-ui/react";
import Services from "../Services/Services";
import { Link } from "react-router-dom";
import { isAuth } from "../../api/Rule_auth_users";

function Nav() {
  return (
    <div>
      <Box w="auto" h="0.5em" bg="red.500" />
      <HStack bg="white" color="white" justifyContent="space-around">
        <Image bg="white" src="../logoRossi.png" alt="logo" width="36" />
        <Stack gap="5em">
          <Wrap>
            <WrapItem>
              <Button colorScheme="red" variant="solid">
                INICIO
              </Button>
              <Button colorScheme="red" variant="solid">
                EMPRESA
              </Button>
              <Services />
              <Button colorScheme="red" variant="solid">
                ESTUDIO
              </Button>
              <Button colorScheme="red" variant="solid">
                CONTACTO
              </Button>
              {isAuth() ? (
                <Link to={"/administrar"}>
                  <Button colorScheme="red" variant="solid">
                    ADMINISTRAR
                  </Button>
                </Link>
              ) : (
                <Link to={"/login"}>
                  <Button colorScheme="red" variant="solid">
                    LOGIN
                  </Button>
                </Link>
              )}
            </WrapItem>
          </Wrap>
        </Stack>
      </HStack>
      <Box w="100%" h="0.5em" bg="red.500" />
    </div>
  );
}

export default Nav;
