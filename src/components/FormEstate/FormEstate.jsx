import React, { useState } from "react";
import "../FormEstate/FormEstate.css";

function FormEstate(props) {
  const [operacion, setOperacion] = useState("");
  const [tipo, setTipo] = useState("");
  const [dormitorios, setDormitorios] = useState();
  const [baños, setBaños] = useState();
  const [metrosTerreno, setMetrosTerreno] = useState("");
  const [metrosEdificados, setMetrosEdificados] = useState("");
  const [observaciones, setObservaciones] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [garage, setGarage] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [zona, setZona] = useState("");
  const [domicilio, setDomicilio] = useState("");

  const handleOperacion = (e) => {
    setOperacion(e.target.value);
  };
  const handleTipo = (e) => {
    setTipo(e.target.value);
  };
  const handleDormitorios = (e) => {
    setDormitorios(e.target.value);
  };
  const handleBaños = (e) => {
    setBaños(e.target.value);
  };
  const handleMetrosTerreno = (e) => {
    setMetrosTerreno(e.target.value);
  };
  const handleMetrosEdificados = (e) => {
    setMetrosEdificados(e.target.value);
  };
  const handleObservaciones = (e) => {
    setObservaciones(e.target.value);
  };
  const handleDescripcion = (e) => {
    setDescripcion(e.target.value);
  };
  const handlePrecio = (e) => {
    setPrecio(e.target.value);
  };
  const handleGarage = (e) => {
    setGarage(e.target.value);
  };
  const handleDepartamento = (e) => {
    setDepartamento(e.target.value);
  };
  const handleZona = (e) => {
    setZona(e.target.value);
  };
  const handleDomicilio = (e) => {
    setDomicilio(e.target.value);
  };

  const credentials = {
    operacion: operacion,
    tipo: tipo,
    dormitorios: dormitorios,
    baños: baños,
    metrosTerreno: metrosTerreno,
    metrosEdificados: metrosEdificados,
    observaciones: observaciones,
    descripcion: descripcion,
    precio: precio,
    garage: garage,
    departamento: departamento,
    zona: zona,
    domicilio: domicilio,
  };

  const disableButtom = operacion.length == 0 ? true : false;

  return (
    <div>
      <form
        onSubmit={() => {
          props.sendForm(credentials);
        }}
      >
        <input type="text" onChange={handleOperacion} placeholder="Operación" />
        <input type="text" onChange={handleTipo} placeholder="Tipo" />
        <input
          type="text"
          onChange={handleDormitorios}
          placeholder="Dormitorios"
        />
        <input type="text" onChange={handleBaños} placeholder="Baños" />
        <input
          type="text"
          onChange={handleMetrosTerreno}
          placeholder="Metros de Terreno"
        />
        <input
          type="text"
          onChange={handleMetrosEdificados}
          placeholder="Metros Edificados"
        />
        <input
          type="text"
          onChange={handleObservaciones}
          placeholder="Observaciones"
        />
        <input
          type="text"
          onChange={handleDescripcion}
          placeholder="Descripción"
        />
        <input type="text" onChange={handlePrecio} placeholder="Precio" />
        <input type="text" onChange={handleGarage} placeholder="Garage" />
        <input
          type="text"
          onChange={handleDepartamento}
          placeholder="Departamento"
        />
        <input type="text" onChange={handleZona} placeholder="Zona" />
        <input type="text" onChange={handleDomicilio} placeholder="Domicilio" />
        <button type="submit" disabled={disableButtom}>
          Agregar
        </button>
      </form>
    </div>
  );
}

export default FormEstate;
