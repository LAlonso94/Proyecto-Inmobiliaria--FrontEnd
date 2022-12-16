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
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const scrollToAnchor = (anchorName) => {
    if (anchorName) {
      let anchorElement = document.getElementById(anchorName); //busca en el DOM renderizado los id que haya, y guarda el elemento cuyo id coincide con el que pase por parametro (lo defino en el onlcick, en este caso, "servicios"=anchorName)
      if (anchorElement) {
        anchorElement.scrollIntoView(); //si encuentra el id en la pagina que tengo renderizada, me lleva al id
      } else {
        navigate({
          //si no encuentra el id en la pagina renderizada, me lleva al home y despues me redirige al id "servicios"
          pathname: "/",
          search: new URLSearchParams({ redirectTo: "services" }).toString(),
        });
      }
    }
  };

  return (
    <>
      <Box h="0.5em" bg="red.500" w="auto" />
      <Flex
        w="100%"
        justifyContent="center"
        display={["none", "none", "flex", "flex"]}
      >
        <HStack
          gap="4em"
          bg="white"
          color="white"
          w="100%"
          justifyContent="space-around"
        >
          <Image bg="white" src="../logoRossi.png" alt="logo" width="36" />

          <Wrap>
            <WrapItem gap="1em" flexWrap="wrap">
              <Button
                w="9em"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  navigate("/");
                }}
              >
                INICIO
              </Button>
              <Button
                w="9em"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  scrollToAnchor("company");
                }}
              >
                EMPRESA
              </Button>
              <Button
                w="9em"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  scrollToAnchor("services"); //en el onClick defino a cual id quiero ir
                }}
              >
                SERVICIOS
              </Button>
              {/* <Button w="9em" colorScheme="red" variant="solid">
                ESTUDIO
              </Button> */}
              <Button
                w="9em"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  scrollToAnchor("contact");
                }}
              >
                CONTACTO
              </Button>
              {isAuth() ? (
                <>
                  <Link to={"/administrar"}>
                    <Button w="9em" colorScheme="red" variant="solid">
                      ADMINISTRAR
                    </Button>
                  </Link>
                  <Button
                    w="9em"
                    colorScheme="red"
                    variant="solid"
                    onClick={logOut}
                  >
                    CERRAR SESION
                  </Button>
                </>
              ) : (
                <Link to={"/login"}>
                  <Button w="9em" colorScheme="red" variant="solid">
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
            <Button
              w="10em"
              colorScheme="red"
              variant="solid"
              onClick={() => {
                navigate("/");
              }}
            >
              INICIO
            </Button>
            <Button
              w="10em"
              colorScheme="red"
              variant="solid"
              onClick={() => {
                scrollToAnchor("company");
              }}
            >
              EMPRESA
            </Button>
            <Button
              w="10em"
              colorScheme="red"
              variant="solid"
              onClick={() => {
                scrollToAnchor("services");
              }}
            >
              SERVICIOS
            </Button>
            {/* <Button w="10em" colorScheme="red" variant="solid">
              ESTUDIO
            </Button> */}
            <Button
              w="10em"
              colorScheme="red"
              variant="solid"
              onClick={() => {
                scrollToAnchor("contact");
              }}
            >
              CONTACTO
            </Button>
            {isAuth() ? (
              <>
                <Link to={"/administrar"}>
                  <Button w="10em" colorScheme="red" variant="solid">
                    ADMINISTRAR
                  </Button>
                </Link>
                <Button
                  w="10em"
                  colorScheme="red"
                  variant="solid"
                  onClick={logOut}
                >
                  CERRAR SESION
                </Button>
              </>
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
    </>
  );
}

export default Nav;
