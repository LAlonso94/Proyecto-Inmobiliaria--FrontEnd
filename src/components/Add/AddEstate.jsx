import React from "react";
import Rule_Estates from "../../api/Rule_Estates";
import "../Add/Add.css";
import FormAdd from "../FormEstate/FormAdd";
import Prueba from "../FormEstate/prueba";

function AddEstate() {
  const sendForm = async (credentials) => {
    await Rule_Estates.postAdd(credentials)
      .then((response) => {
        alert("El inmueble se ha agregado correctamente");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div>
      {/*       <FormAdd sendForm={sendForm} /> */}
      <Prueba sendForm={sendForm} />
    </div>
  );
}

export default AddEstate;
