import React, { useEffect } from "react";
import { useState } from "react";
import Rule_Estates from "../../api/Rule_Estates";
import FormEdit from "../FormEstate/FormEdit";
import {
  Input,
  InputGroup,
  Button,
  InputRightElement,
  Flex,
  InputLeftElement,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

function EditEstate() {
  const [idEstate, setIdEstate] = useState();
  const [detail, setDetail] = useState();

  const handleId = (e) => {
    setIdEstate(e.target.value);
    return;
  };

  const detailEstate = async (estate) => {
    await Rule_Estates.getSearchId(estate)
      .then((result) => {
        setDetail(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const editForm = async (credentials) => {
    await Rule_Estates.putEdit(credentials, detail.inmuebleId)
      .then((response) => {
        alert("El inmueble se ha editado correctamente");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div>
      <Flex padding="5" justify="center">
        <InputGroup size="md" width="50%">
          <InputLeftElement
            pointerEvents="none"
            children={<Search2Icon color="gray.300" />}
          />
          <Input onChange={handleId} placeholder="Escriba el ID" />
          <InputRightElement width="4.5rem">
            <Button
              margin="0.5"
              h="1.75rem"
              size="sm"
              onClick={() => {
                detailEstate(idEstate);
              }}
              colorScheme="red"
            >
              BUSCAR
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
      {detail && <FormEdit detail={detail} editForm={editForm} />}
    </div>
  );
}

export default EditEstate;
