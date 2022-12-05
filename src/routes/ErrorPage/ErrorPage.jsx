import { Flex, Text, Image, Button } from "@chakra-ui/react";
import { useRouteError, Link } from "react-router-dom";
import photo from "../../assets/react.svg";

function ErrorPage() {
  const error = useRouteError();
  return (
    <Flex direction="column" justify="start" align="center" h="100vh">
      <Image src={photo} h="30%" borderRadius="30px" mt="15vh"></Image>
      <Text
        fontSize="1em"
        textAlign="center"
        textShadow="0 0 20px black"
        my="10vh"
        lineHeight="1.5em"
        w="80%"
      >
        Parece que ha ocurrido un error.
        <br />
        <br />
        Intenta recargar la página o haz click en el botón para volver al menú
        principal.
      </Text>
      <Link to={`/`}>
        <Button
          height="40px"
          colorScheme="blue"
          variant="solid"
          border="1px "
          padding="2"
        >
          Volver al menú principal
        </Button>
      </Link>
    </Flex>
  );
}

export default ErrorPage;
