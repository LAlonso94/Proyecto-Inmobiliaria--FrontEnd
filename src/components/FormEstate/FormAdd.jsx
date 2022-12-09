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

function FormAdd(props) {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("operacion", data.operacion);
    formData.append("tipo", data.tipo);
    formData.append("dormitorios", data.dormitorios);
    formData.append("baños", data.baños);
    formData.append("metrosTerreno", data.metrosTerreno);
    formData.append("metrosEdificados", data.metrosEdificados);
    formData.append("observaciones", data.observaciones);
    formData.append("descripcion", data.descripcion);
    formData.append("precio", data.precio);
    formData.append("garage", data.garage);
    formData.append("departamento", data.departamento);
    formData.append("zona", data.zona);
    formData.append("domicilio", data.domicilio);
    formData.append("file", data.file[0]);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    props.sendForm(formData, config);
  };

  return (
    <>
      <form style={{ margin: 10 }} onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          isRequired
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
              {...register("operacion", { required: true })}
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
              {...register("tipo", { required: true })}
            >
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
            <NumberInput
              w="70%"
              {...register("dormitorios", { required: true })}
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
            <NumberInput w="70%" {...register("baños", { required: true })}>
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
              {...register("metrosTerreno", { required: true })}
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
              {...register("metrosEdificados", { required: true })}
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
              {...register("observaciones", { required: true })}
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
              {...register("descripcion", { required: true })}
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
              {...register("precio", { required: true })}
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
              {...register("garage", { required: true })}
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
              w="70%"
              variant="outline"
              mb="1em"
              {...register("departamento", { required: true })}
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
              {...register("zona", { required: true })}
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
              {...register("domicilio", { required: true })}
            />
          </Flex>
          <Flex h="3em" mb="1em">
            <FormLabel w="30%" h="100%">
              Fotos
            </FormLabel>
            <Input
              w="70%"
              //variant="outline"
              type="file"
              mb="1em"
              {...register("file", { required: true })}
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
export default FormAdd;
