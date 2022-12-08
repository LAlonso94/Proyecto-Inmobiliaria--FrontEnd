import { Flex, Text, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import photo from "/404.jpg";

function ErrorPage() {
  return (
    <Flex direction="column" justify="start" align="center" h="100vh">
      <Image src={photo} h="30%" borderRadius="30px" mt="15vh"></Image>
      <Text
        fontSize="1em"
        textAlign="center"
        textShadow="0 0 20px red"
        my="10vh"
        lineHeight="1.5em"
        w="80%"
      >
        No se puede encontrar la página.
        <br />
        <br />
        Intenta recargar la página o haz click en el botón debajo para ir a la
        página principal.
      </Text>
      <Link to={`/`}>
        <Button
          height="40px"
          colorScheme="red"
          variant="solid"
          border="1px "
          padding="2"
        >
          Ir a la página principal
        </Button>
      </Link>
    </Flex>
  );
}

export default ErrorPage;
