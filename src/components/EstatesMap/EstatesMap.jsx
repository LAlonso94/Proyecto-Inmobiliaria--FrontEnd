import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Divider,
  Image,
  Badge,
  Flex,
} from "@chakra-ui/react";

function EstatesMap(props) {
  return (
    <Flex justify="center" direction="row" wrap="wrap">
      {props.list.map((item) => (
        <Link to={`/detalle/${item.inmuebleId}`}>
          <Card maxW="sm">
            <CardBody>
              <Badge
                pos="absolute"
                zIndex="100"
                fontSize="lg"
                variant="solid"
                bg="red.500"
              >
                {item.operacion}
              </Badge>
              <Image
                src={`http://localhost:3001/api/photos/${item.inmuebleId}`}
                alt="Foto de inmueble"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Divider />
                <Flex align="center" justify="space-between">
                  <Heading textTransform="uppercase" color="red.500" size="md">
                    {item.tipo}
                  </Heading>
                  <Text textTransform="uppercase" color="red.500" fontSize="md">
                    <b>{item.zona}</b>
                  </Text>
                </Flex>
                <Text fontSize="xs">{item.observaciones}</Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <Text color="red.500" fontSize="2xl">
                <b>{item.precio}</b>
              </Text>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </Flex>
  );
}

export default EstatesMap;
