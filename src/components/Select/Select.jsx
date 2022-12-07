import React from "react";
import { Select } from "@chakra-ui/react";
import "../Select/Select.css";

function select(props) {
  const handleSelect = (e) => {
    e.preventDefault();
    let nuevoObj = {};
    Object.keys(props.selectObject).forEach((key) => {
      if (key == e.target.value) {
        nuevoObj[key] = !props.selectObject[e.target.value];
      } else {
        nuevoObj[key] = false;
      }
    });

    props.setSelectObject(nuevoObj);
  };
  return (
    <form className="formContainer">
      <b>
        <label className="label">ELIJA LA ACCIÓN:</label>
      </b>
      <Select
        p="3"
        bg="white"
        textAlign="center"
        onChange={handleSelect}
        size="lg"
        width="60%"
      >
        <option value="showAll">Mostrar todos</option>
        <option value="addEstate">Agregar</option>
        <option value="editEstate">Editar</option>
        <option value="deleteEstate">Eliminar</option>
      </Select>
      <br />
    </form>
  );
}
export default select;
