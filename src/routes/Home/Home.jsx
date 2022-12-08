import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";
import Header from "../../components/Header/Header";
import Company from "../../components/Company/Company";
import EstatesMap from "../../components/EstatesMap/EstatesMap";
import Rule_Estates from "../../api/Rule_Estates";
import Services from "../../components/Services/Services";

function Home() {
  const [list, setList] = useState([]);
  const [reset, setReset] = useState(false);

  const showEstates = async () => {
    const estates = await Rule_Estates.getEstates();
    setList(estates);
  };

  const filterEstates = async (credentials) => {
    const filter = await Rule_Estates.getFilterEstates(credentials);
    setList(filter);
  };
  useEffect(() => {
    showEstates();
  }, []);

  return (
    <div>
      <Nav />
      <Header filterEstates={filterEstates} />
      <EstatesMap list={list} />
      <Services />
      <Company />
      <Footer />
    </div>
  );
}

export default Home;
