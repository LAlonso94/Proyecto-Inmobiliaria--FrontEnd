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
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import "../FormEstate/Formulario.css";

function FormEdit(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    props.editForm(data);
  };

  return (
    <>
      <form style={{ margin: 10 }} onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          display="flex"
          flexDirection="column"
          w="80vw"
          justifyContent="center"
          m="auto"
        >
          <Flex h="3em" mb="1em">
            <FormLabel h="100%" w="30%">
              Operacion
            </FormLabel>
            <Select
              w="70%"
              variant="outline"
              mb="1em"
              defaultValue={props.detail?.operacion}
              {...register("operacion")}
            >
              <option value="Venta">Venta</option>
              <option value="Alquiler">Alquiler</option>
            </Select>
          </Flex>
          <Flex h="3em" mb="1em">
            <FormLabel h="100%" w="30%">
              Tipo de inmueble
            </FormLabel>
            <Select
              w="70%"
              variant="outline"
              mb="1em"
              defaultValue={props.detail?.tipo}
              {...register("tipo")}
            >
              <option value="Casa">Casa</option>
              <option value="Apartamento">Apartamento</option>
              <option value="Local comercial">Local comercial</option>
              <option value="Local industrial">Local industrial</option>
              <option value="Terreno">Terreno</option>
            </Select>
          </Flex>
          <NumberInput
            defaultValue={1}
            min={1}
            max={20}
            display="flex"
            mb="1em"
            h="3em"
          >
            <FormLabel h="100%" w="30%">
              Dormitorios
            </FormLabel>
            <NumberInput
              w="70%"
              defaultValue={props.detail?.dormitorios}
              {...register("dormitorios")}
            >
              <NumberInputField h="100%" />
              <NumberInputStepper h="100%">
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </NumberInput>
          <NumberInput
            defaultValue={1}
            min={1}
            max={10}
            display="flex"
            mb="1em"
            h="3em"
          >
            <FormLabel h="100%" w="30%">
              Baños
            </FormLabel>
            <NumberInput
              w="70%"
              defaultValue={props.detail?.baños}
              {...register("baños")}
            >
              <NumberInputField h="100%" />
              <NumberInputStepper h="100%">
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </NumberInput>
          <Flex h="3em" mb="1em">
            <FormLabel w="30%" h="100%">
              Metraje del terreno
            </FormLabel>
            <Input
              w="70%"
              variant="outline"
              defaultValue={props.detail?.metrosTerreno}
              mb="1em"
              {...register("metrosTerreno")}
            />
          </Flex>
          <Flex h="3em" mb="1em">
            <FormLabel w="30%" h="100%">
              Metros edificados
            </FormLabel>
            <Input
              w="70%"
              variant="outline"
              defaultValue={props.detail?.metrosEdificados}
              mb="1em"
              {...register("metrosEdificados")}
            />
          </Flex>
          <Flex h="5em" mb="1em">
            <FormLabel w="30%" h="100%">
              Otras Características
            </FormLabel>
            <Textarea
              w="70%"
              h="100%"
              mb="1em"
              defaultValue={props.detail?.observaciones}
              {...register("observaciones")}
            />
          </Flex>
          <Flex h="5em" mb="1em">
            <FormLabel w="30%" h="100%">
              Descripcion
            </FormLabel>
            <Textarea
              w="70%"
              h="100%"
              mb="1em"
              defaultValue={props.detail?.descripcion}
              {...register("descripcion")}
            />
          </Flex>
          <Flex h="3em" mb="1em">
            <FormLabel w="30%" h="100%">
              Precio
            </FormLabel>
            <Input
              w="70%"
              variant="outline"
              defaultValue={props.detail?.precio}
              mb="1em"
              {...register("precio")}
            />
          </Flex>
          <Flex h="3em" mb="1em">
            <FormLabel h="100%" w="30%">
              Garage
            </FormLabel>
            <Select
              w="70%"
              variant="outline"
              mb="1em"
              defaultValue={props.detail?.garage}
              {...register("garage")}
            >
              <option value="No">No</option>
              <option value="Si">Si</option>
            </Select>
          </Flex>
          <Flex h="3em" mb="1em">
            <FormLabel h="100%" w="30%">
              Departamento
            </FormLabel>
            <Select
              defaultValue={props.detail?.departamento}
              w="70%"
              variant="outline"
              mb="1em"
              {...register("departamento")}
            >
              <option value="Montevideo">Montevideo</option>
              <option value="Artigas">Artigas</option>
              <option value="Canelones">Canelones</option>
              <option value="Cerro Largo">Cerro Largo</option>
              <option value="Colonia">Colonia</option>
              <option value="Durazno">Durazno</option>
              <option value="Flores">Flores</option>
              <option value="Florida">Florida</option>
              <option value="Lavalleja">Lavalleja</option>
              <option value="Maldonado">Maldonado</option>
              <option value="Paysandú">Paysandú</option>
              <option value="Río Negro">Río Negro</option>
              <option value="Rivera">Rivera</option>
              <option value="Rocha">Rocha</option>
              <option value="Salto">Salto</option>
              <option value="San José">San José</option>
              <option value="Soriano">Soriano</option>
              <option value="Tacuarembó">Tacuarembó</option>
              <option value="Treinta y Tres">Treinta y Tres</option>
            </Select>
          </Flex>
          <Flex h="3em" mb="1em">
            <FormLabel w="30%" h="100%">
              Zona
            </FormLabel>
            <Input
              w="70%"
              variant="outline"
              defaultValue={props.detail?.zona}
              mb="1em"
              {...register("zona")}
            />
          </Flex>
          <Flex h="3em" mb="1em">
            <FormLabel w="30%" h="100%">
              Domicilio
            </FormLabel>
            <Input
              w="70%"
              variant="outline"
              defaultValue={props.detail?.domicilio}
              mb="1em"
              {...register("domicilio")}
            />
          </Flex>
        </FormControl>
        <Button m="auto" size="md" colorScheme="yellow" type="submit">
          Enviar
        </Button>
      </form>
    </>
  );
}
export default FormEdit;
