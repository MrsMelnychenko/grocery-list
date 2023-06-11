import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styles from "./ListTile.module.css";
import PopUp from "./PopUp";
import { useState } from "react";

const ListTile = ({ title }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className={styles.card}>
        <ShoppingCartIcon />
        <p className={styles.title}>{title}</p>
        <div className={styles.controlbtn}>
          <EditIcon />
          <CloseIcon onClick={handleModalToggle} />
        </div>
      </div>
      {showModal && <PopUp close={handleCloseModal} item={title} />}
    </>
  );
};

export default ListTile;
