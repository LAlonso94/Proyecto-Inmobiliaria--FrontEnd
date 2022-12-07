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

function Prueba(props) {
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
        <FormControl
          isRequired
          display="flex"
          flexDirection="column"
          w="50vw"
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
            <Select w="70%" variant="outline" mb="1em" {...register("tipo")}>
              <option value="Casa">Casa</option>
              <option value="Apartamento">Apartamento</option>
              <option value="Local comercial">Local comercial</option>
              <option value="Local industrial">Local industrial</option>
              <option value="Terreno">Terreno</option>
            </Select>
          </Flex>
          <NumberInput
            defaultValue={2}
            min={1}
            max={20}
            display="flex"
            mb="1em"
            h="3em"
          >
            <FormLabel h="100%" w="30%">
              Dormitorios
            </FormLabel>
            <NumberInput w="70%" {...register("dormitorios")}>
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
            <NumberInput w="70%" {...register("baños")}>
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
              placeholder="500 mt2"
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
              placeholder="70 mt2"
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
              placeholder="Muy buena ubicacion. Garantia ANDA, CGN, etc."
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
              placeholder="Complejo habitacional. Servicios de luz y agua, etc."
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
              placeholder="USD 90.000"
              mb="1em"
              {...register("precio")}
            />
          </Flex>
          <Flex h="3em" mb="1em">
            <FormLabel h="100%" w="30%">
              Garage
            </FormLabel>
            <Select w="70%" variant="outline" mb="1em" {...register("garage")}>
              <option value="No">No</option>
              <option value="Si">Si</option>
            </Select>
          </Flex>
          <Flex h="3em" mb="1em">
            <FormLabel h="100%" w="30%">
              Departamento
            </FormLabel>
            <Select
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
              placeholder="Pocitos - Carrasco - Las Piedas - Punta del Este"
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
              placeholder="Paysandú 63, esq. 18 de Julio"
              mb="1em"
              {...register("domicilio")}
            />
          </Flex>
          <Flex h="3em" mb="1em">
            <FormLabel w="30%" h="100%">
              Fotos
            </FormLabel>
            <Input
              w="70%"
              variant="outline"
              type="file"
              mb="1em"
              {...register("file")}
            />
          </Flex>
        </FormControl>
        <Button m="auto" size="md" colorScheme="whatsapp" type="submit">
          Enviar
        </Button>
      </form>
    </>
  );
}
export default Prueba;
