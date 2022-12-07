import React, { useEffect } from "react";
import { useState } from "react";
import Rule_Estates from "../../api/Rule_Estates";
import FormEdit from "../FormEstate/FormEdit";

function EditEstate() {
  const [idEstate, setIdEstate] = useState();
  const [detail, setDetail] = useState();

  const handleId = (e) => {
    setIdEstate(e.target.value);
    return;
  };

  const detailEstate = async (estate) => {
    await Rule_Estates.getSearchId(estate)
      .then((result) => {
        setDetail(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const editForm = async (credentials) => {
    await Rule_Estates.putEdit(credentials, detail.inmuebleId)
      .then((response) => {
        alert("El inmueble se ha editado correctamente");
      })
      .catch((error) => {
        alert(error);
      });
  };

  //boton on click consulta al endpoint que tengo (mismo que stefi)
  //setear bandera que activa el form con los datos que devuelve el enndpoint
  //form por props recibe los datos del inmueble y los carga
  return (
    <div>
      <input type="text" onChange={handleId} placeholder="Id" />
      <button
        onClick={() => {
          detailEstate(idEstate);
        }}
      >
        Buscar
      </button>
      {detail && <FormEdit detail={detail} editForm={editForm} />}
    </div>
  );
}

export default EditEstate;
