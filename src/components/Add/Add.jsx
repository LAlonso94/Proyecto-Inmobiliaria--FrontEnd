import React from "react";
import Rule_Estates from "../../api/Rule_Estates";
import "../Add/Add.css";
import FormEstate from "../FormEstate/FormEstate";
import Formulario from "../FormEstate/Formulario";

function Add() {
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
      <Formulario sendForm={sendForm} />
    </div>
  );
}

export default Add;
