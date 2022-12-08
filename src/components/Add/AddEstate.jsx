import React from "react";
import Rule_Estates from "../../api/Rule_Estates";
import "../Add/Add.css";
import FormAdd from "../FormEstate/FormAdd";

function AddEstate() {
  const sendForm = async (credentials, config) => {
    //sacar config para original
    await Rule_Estates.postAdd(credentials, config) //sacar config para original
      .then((response) => {
        alert("El inmueble se ha agregado correctamente");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div style={{ padding: 20 }}>
      <FormAdd sendForm={sendForm} />
      
    </div>
  );
}

export default AddEstate;
