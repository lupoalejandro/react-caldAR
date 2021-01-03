import React, { useState } from "react";
import PropTypes from "prop-types";
import { GoTrashcan } from "react-icons/go";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FcCancel } from "react-icons/fc";
import { BiPencil } from "react-icons/bi";
import style from "./ListBoilerType.module.css";

const ListBoilerType = (props) => {
  const [isEditing, toggleEditing] = useState(false);
  const [boilerType, setBoilerType] = useState({ ...props.boilerType });

  const cancelClick = () => {
    toggleEditing();
    setBoilerType(props.boilerType);
  }
  const toggleEdit = () => {
    toggleEditing(!isEditing);
  };
  const onChange = (e) => {
    setBoilerType({ ...boilerType, [e.target.name]: e.target.value });
  };

  const saveChanges = () => {
    toggleEdit();
    props.editBoilerType(boilerType);
  };

  if (isEditing) {
    return (
      <ul className={style.showForm}>
        <input
          className={style.inputStyle}
          type="number"
          name="id"
          placeholder="Id"
          value={boilerType._id}
          onChange={onChange}
          required
        ></input>
        <input
          className={style.inputStyle}
          type="text"
          name="skillsId"
          placeholder="Skills ID"
          value={boilerType.skillsId}
          onChange={onChange}
        ></input>
        <input
          className={style.inputStyle}
          type="text"
          name="descriptions"
          placeholder="Description"
          value={boilerType.descriptions}
          onChange={onChange}
        ></input>
        <input
          className={style.inputStyle}
          type="text"
          name="stock"
          placeholder="Stock"
          value={boilerType.stock}
          onChange={onChange}
        ></input>
        <div>
          <button onClick={saveChanges} className={style.Btn}>
            <AiOutlineCheckCircle />
          </button>
          <button onClick={cancelClick} className={style.Btn}>
            <FcCancel />
          </button>
        </div>
      </ul>
    );
  }

  return (
    <div>
      <ul className={style.showForm}>
        <li className={style.liStyle}>{props.boilerType.id}</li>
        <li className={style.liStyle}>{props.boilerType.skillsId}</li>
        <li className={style.liStyle}>{props.boilerType.descriptions}</li>
        <li className={style.liStyle}>{props.boilerType.stock}</li>
        <button onClick={toggleEdit} className={style.Btn}>
          <BiPencil />
        </button>
        <button
          onClick={() => props.deleteBoilerType(props.boilerType._id)}
          className={style.Btn}
        >
          <GoTrashcan />
        </button>
      </ul>
    </div>
  );
};

ListBoilerType.propTypes = {
  boilerType: PropTypes.object.isRequired,
  deleteBoilerType: PropTypes.func.isRequired,
  editBoilerType: PropTypes.func.isRequired,
};


export default ListBoilerType;
