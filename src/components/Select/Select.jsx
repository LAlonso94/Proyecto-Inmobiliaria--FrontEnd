import React from "react";

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
    // props.setSelectObject({
    //   ...props.selectObject,
    //   [e.target.value]: !props.selectObject[e.target.value],
    // });
    props.setSelectObject(nuevoObj);
    console.log(e);
  };
  return (
    <form>
      <label for="">Elije la acción:</label>
      <select name="" onChange={handleSelect}>
        <option value="searchId">Buscar por Id</option>
        <option value="addEstate">Agregar</option>
        <option value="editEstate">Editar</option>
        <option value="deleteEstate">Eliminar</option>
      </select>
      <br />
    </form>
  );
}
export default select;
