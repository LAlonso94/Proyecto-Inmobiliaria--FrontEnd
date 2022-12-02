import {
  Select,
  Input,
  Flex,
  FormLabel,
  FormControl,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useState } from "react";

function Formulario(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    props.sendForm(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isRequired flexDirection="column">
          <Flex h="3em" mb="1em">
            <FormLabel w="20%" h="100%">
              Operacion
            </FormLabel>
            <Input
              required
              variant="outline"
              placeholder="Operación"
              {...register("operacion", { required: true })}
            />
            {errors.operacion && (
              <span>La operación ingresada no es valida</span>
            )}
          </Flex>
          <Flex h="3em" mb="1em">
            <FormLabel w="20%" h="100%">
              Tipo
            </FormLabel>
            <Input
              variant="outline"
              placeholder="Tipo"
              {...register("tipo", { required: true })}
            />
          </Flex>
          <Flex h="3em" mb="1em">
            <NumberInput
              defaultValue={0}
              min={0}
              max={20}
              {...register("dormitorios", { required: true })}
            >
              Dormitorios
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Flex>
          <Flex h="3em" mb="1em">
            <NumberInput
              defaultValue={0}
              min={0}
              max={20}
              {...register("baños", { required: true })}
            >
              Baños
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Flex>
          <Flex h="3em" mb="1em">
            <FormLabel w="20%" h="100%">
              Metros Terreno
            </FormLabel>
            <Input
              variant="outline"
              placeholder="Pais"
              mb="1em"
              {...register("metrosTerreno")}
            />
          </Flex>
          <Flex h="3em" mb="1em">
            <FormLabel h="100%" w="20%">
              Posicion
            </FormLabel>
            <Select variant="outline" mb="1em" {...register("posicion")}>
              <option value="Golero">Golero</option>
              <option value="Defensa">Defensa</option>
              <option value="Mediocampista">Mediocampista</option>
              <option value="Delantero">Delantero</option>
            </Select>
          </Flex>
          <NumberInput
            defaultValue={80}
            min={1}
            max={180}
            display="flex"
            mb="1em"
            h="3em"
            {...register("peso")}
          >
            <FormLabel h="100%" w="20%">
              Peso (Kg)
            </FormLabel>
          </NumberInput>
          <NumberInput
            defaultValue={1.8}
            min={1}
            max={2.5}
            display="flex"
            mb="1em"
            h="3em"
            {...register("altura")}
          >
            <FormLabel h="100%" w="20%">
              Altura (mts)
            </FormLabel>
          </NumberInput>
          <NumberInput
            defaultValue={15}
            min={1}
            max={29}
            display="flex"
            mb="1em"
            h="3em"
            {...register("camiseta")}
          >
            <FormLabel w="20%" h="100%">
              No. camiseta
            </FormLabel>
          </NumberInput>
        </FormControl>
        <Button
          size="md"
          colorScheme="whatsapp"
          type="submit"
          onClick={() => {
            props.titulares(titulares) && props.suplentes(suplentes);
          }}
        >
          Enviar
        </Button>
      </form>
    </>
  );
}
export default Formulario;
