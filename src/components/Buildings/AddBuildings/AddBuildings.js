import React, { useState } from "react";
import "./AddBuilding.css";
import PropTypes from "prop-types";

const AddBuilding = (props) => {
  const [building, setNewBuilding] = useState({
    address: "",
    boilerID: "",
    fullname: "",
    phone: "",
  });

  const onChange = (e) =>
    setNewBuilding({ ...building, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    props.addBuilding({ ...building });
    setNewBuilding({
      address: "",
      boilerID: "",
      fullname: "",
      phone: "",
    });
  };

  return (
    <form className="addForm" onSubmit={onSubmit}>
      <input
        className="inputStyle"
        type="text"
        name="address"
        placeholder="Address"
        value={building.address}
        onChange={onChange}
      ></input>
      <input
        className="inputStyle"
        type="number"
        name="boilerID"
        placeholder="Boiler Type"
        value={building.boilerID}
        onChange={onChange}
      ></input>
      <input
        className="inputStyle"
        type="text"
        name="fullname"
        placeholder="Name"
        value={building.fullname}
        onChange={onChange}
      ></input>
      <input
        className="inputStyle"
        type="text"
        name="phone"
        placeholder="Phone"
        value={building.phone}
        onChange={onChange}
      ></input>
      <input className="btnSubmit" type="submit" value="Add New"></input>
    </form>
  );
};

AddBuilding.propTypes = {
  addBuilding: PropTypes.func.isRequired,
};

export default AddBuilding;
