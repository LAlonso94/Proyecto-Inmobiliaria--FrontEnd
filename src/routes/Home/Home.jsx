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

  const showEstates = async () => {
    const estates = await Rule_Estates.getEstates();
    setList(estates);
  };
  useEffect(() => {
    showEstates();
  }, []);
  return (
    <div>
      <Nav />
      <Header />
      <EstatesMap list={list} />
      <Company />
      <Footer />
    </div>
  );
}

export default Home;
