import React from "react";
import Footer from "../components/Footer/Footer";
import "../routes/Home.css";
import Admin from "./Admin/Admin";

function Home() {
  return (
    <div>
      <Admin />
      <Footer />
    </div>
  );
}

export default Home;
