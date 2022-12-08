import React from "react";
import { Select, IconButton } from "@chakra-ui/react";
import "../Select/Select.css";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

function select(props) {
  const navigate = useNavigate();
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
      <IconButton
        margin="5"
        aria-label="backHome"
        icon={<ArrowBackIcon />}
        onClick={() => {
          navigate("/");
        }}
      />
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
