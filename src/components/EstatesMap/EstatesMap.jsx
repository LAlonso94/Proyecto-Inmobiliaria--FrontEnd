import React, { useEffect } from "react";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Divider,
  Image,
  Badge,
  Box,
  Flex,
} from "@chakra-ui/react";

function EstatesMap(props) {
  return (
    <Flex justify="center" direction="row">
      {props.list.map((item) => (
        <Card maxW="sm">
          <CardBody>
            <Badge variant="subtle" colorScheme="red">
              {item.operacion}
            </Badge>
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Divider />
              <Flex align="center" justify="space-between">
                <Heading size="md">{item.tipo}</Heading>
                <Text fontSize="md">
                  <b>{item.zona}</b>
                </Text>
              </Flex>
              <Text fontSize="xs">{item.observaciones}</Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <Text color="#F56565" fontSize="2xl">
              <b>{item.precio}</b>
            </Text>
          </CardFooter>
        </Card>
      ))}
    </Flex>
  );
}

export default EstatesMap;
