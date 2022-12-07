import React, { useState } from "react";
import Select from "../../components/Select/Select";
import DeleteEstate from "../../components/Delete/DeleteEstate";
import EditEstate from "../../components/Edit/EditEstate";
import ShowAll from "../../components/ShowAll/ShowAll";
import AddEstate from "../../components/Add/AddEstate";

function Admin() {
  const [selectObject, setSelectObject] = useState({
    showAll: false,
    addEstate: false,
    editEstate: false,
    deleteEstate: false,
  });
  console.log(selectObject);
  return (
    <div>
      <Select selectObject={selectObject} setSelectObject={setSelectObject} />
      {selectObject.showAll && <ShowAll />}
      {selectObject.addEstate && <AddEstate />}
      {selectObject.editEstate && <EditEstate />}
      {selectObject.deleteEstate && <DeleteEstate />}
    </div>
  );
}

export default Admin;
