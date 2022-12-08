import { BsListUl } from "react-icons/bs";
import { Link } from "react-router-dom";
import { isAuth } from "../../api/Rule_auth_users";
import {
  Button,
  WrapItem,
  Wrap,
  HStack,
  Image,
  Box,
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  Flex,
} from "@chakra-ui/react";

function Nav() {
  return (
    <div>
      <Box h="0.5em" bg="red.500" />
      <Flex justifyContent="center" display={["none", "none", "flex", "flex"]}>
        <HStack gap="25em" bg="white" color="white">
          <Image bg="white" src="../logoRossi.png" alt="logo" width="36" />

          <Wrap>
            <WrapItem gap="1em">
              <Button colorScheme="red" variant="solid">
                INICIO
              </Button>

              <Button colorScheme="red" variant="solid">
                EMPRESA
              </Button>

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
        </HStack>
      </Flex>

      <Flex
        justifyContent="space-between"
        display={["flex", "flex", "none", "none"]}
        pl="1em"
        pr="1em"
      >
        <Image
          bg="white"
          src="../logoRossi.png"
          alt="logo"
          h="auto"
          width="5em"
        />
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<BsListUl />}
            boxSize="5em"
            variant="outline"
            color="red"
          />

          <MenuList
            alignItems="center"
            gap={1}
            display="flex"
            flexDirection="column"
          >
            <Button w="10em" colorScheme="red" variant="solid">
              INICIO
            </Button>
            <Button w="10em" colorScheme="red" variant="solid">
              EMPRESA
            </Button>
            <Button w="10em" colorScheme="red" variant="solid">
              SERVICIOS
            </Button>
            <Button w="10em" colorScheme="red" variant="solid">
              ESTUDIO
            </Button>
            <Button w="10em" colorScheme="red" variant="solid">
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
                <Button w="10em" colorScheme="red" variant="solid">
                  LOGIN
                </Button>
              </Link>
            )}
          </MenuList>
        </Menu>
      </Flex>
      <Box w="100%" h="0.5em" bg="red.500" />
    </div>
  );
}

export default Nav;
