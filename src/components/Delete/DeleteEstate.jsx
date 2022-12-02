import React, { useState } from "react";
import Rule_Estates from "../../api/Rule_Estates";

function DeleteEstate() {
  const [id, setId] = useState();
  const handleId = (e) => {
    setId(e.target.value);
  };

  const deleteOneEstate = async () => {
    await Rule_Estates.deleteDelete(id)
      .then((response) => {
        alert("El inmueble se ha borrado correctamente");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Escriba el Id del inmueble"
        onChange={handleId}
      />
      <button onClick={deleteOneEstate}>ELIMINAR</button>
    </div>
  );
}

export default DeleteEstate;
