import React, { useState } from "react";
import Rule_Estates from "../../api/Rule_Estates";
import {
  Input,
  InputGroup,
  Button,
  InputRightElement,
  Flex,
} from "@chakra-ui/react";

function DeleteEstate() {
  const [id, setId] = useState();
  const handleId = (e) => {
    setId(e.target.value);
  };

  const deleteOneEstate = async () => {
    await Rule_Estates.deleteDelete(id)
      .then((response) => {
        alert("El inmueble se ha borrado correctamente");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <Flex alignItems="center" justify="center" height="70vh">
      <InputGroup size="md" width="50%">
        <Input onChange={handleId} placeholder="Escriba el ID" />
        <InputRightElement width="4.5rem">
          <Button
            h="1.75rem"
            size="sm"
            onClick={deleteOneEstate}
            colorScheme="red"
            margin="0.5"
          >
            ELIMINAR
          </Button>
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
}

export default DeleteEstate;
