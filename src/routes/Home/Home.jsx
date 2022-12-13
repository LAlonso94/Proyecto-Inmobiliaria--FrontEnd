import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";
import Header from "../../components/Header/Header";
import Company from "../../components/Company/Company";
import EstatesMap from "../../components/EstatesMap/EstatesMap";
import Rule_Estates from "../../api/Rule_Estates";
import Services from "../../components/Services/Services";
import { useSearchParams } from "react-router-dom";

function Home() {
  const [list, setList] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams);

  const showEstates = async () => {
    const estates = await Rule_Estates.getEstates();
    setList(estates);
  };

  const filterEstates = async (credentials) => {
    const filter = await Rule_Estates.getFilterEstates(credentials);
    setList(filter);
  };

  const scrollToAnchor = (anchorName) => {
    if (anchorName) {
      let anchorElement = document.getElementById(anchorName);
      if (anchorElement) {
        anchorElement.scrollIntoView();
      }
    }
  };

  const getParams = () => {
    /* const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
    const anchor = urlParams.get("redirectTo"); */

    //las 3 lineas de arriba es lo mismo que la linea 42 + linea 13
    const anchor = searchParams.get("redirectTo");
    scrollToAnchor(anchor);
  };

  useEffect(() => {
    showEstates();
    getParams();
  }, []);

  return (
    <>
      <Nav />
      <Header filterEstates={filterEstates} />
      <EstatesMap list={list} />
      <Services />
      <Company />
      <Footer />
    </>
  );
}

export default Home;
