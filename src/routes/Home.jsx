import React from "react";
import Footer from "../components/Footer/Footer";
import "../routes/Home.css";
import Admin from "./Admin/Admin";
import Nav from "../components/Nav/Nav";
import Header from "../components/Header/Header";

function Home() {
  return (
    <div>
      <Nav />
      <Header />
      <Footer />
    </div>
  );
}

export default Home;
