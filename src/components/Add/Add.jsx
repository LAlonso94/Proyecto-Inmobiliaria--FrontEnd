import React from "react";
import Rule_Estates from "../../api/Rule_Estates";
import "../Add/Add.css";
import FormEstate from "../FormEstate/FormEstate";

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
      <FormEstate sendForm={sendForm} />
    </div>
  );
}

export default Add;
