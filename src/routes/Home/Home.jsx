import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";
import Header from "../../components/Header/Header";
import FormEstate from "../../components/FormEstate/FormEstate";
import Formulario from "../../components/FormEstate/Formulario";
import Company from "../../components/Company/Company";
import EstatesMap from "../../components/EstatesMap/EstatesMap";
import Rule_Estates from "../../api/Rule_Estates";

function Home() {
  const [list, setList] = useState([]);
  const [reset, setReset] = useState(false);

  const showEstates = async () => {
    const estates = await Rule_Estates.getEstates();
    setList(estates);
  };
  const search = (x) => {
    if (x !== "") {
      const filterEstate = [...list].filter((item) => {
        if (
          item.operacion.includes(x) ||
          item.tipo.includes(x) ||
          item.departamento.includes(x)
        ) {
          return true;
        } else return false;
      });
      setList(filterEstate);
    } else {
      //Cambio el estado del array de dependecias del useEffect para que se ejecute el fetch nuevamente.
      setReset(!reset);
    }
  };
  useEffect(() => {
    showEstates();
  }, [reset]);
  return (
    <div>
      <Nav />
      <Header search={search} />
      <EstatesMap list={list} />
      <Company />
      <Footer />
    </div>
  );
}

export default Home;
