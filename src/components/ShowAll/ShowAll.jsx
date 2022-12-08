import React, { useEffect, useState } from "react";
import Rule_Estates from "../../api/Rule_Estates";
import EstatesMap from "../EstatesMap/EstatesMap";
function ShowAll() {
  const [list, setList] = useState([]);

  const showEstates = async () => {
    const estates = await Rule_Estates.getEstates();
    setList(estates);
  };

  useEffect(() => {
    showEstates();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <EstatesMap list={list} />
    </div>
  );
}

export default ShowAll;
