import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styles from "./ListTile.module.css";
import PopUp from "./PopUp";
import { useState } from "react";
import { getDatabase, ref, get, child, remove } from "firebase/database";
import { useCookies } from "react-cookie";

const ListTile = ({ id, title }) => {
  const [cookies] = useCookies(["userEmail"]);
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const dbRef = ref(getDatabase());
  const deleteRef = child(
    dbRef,
    `Lists/${cookies.userEmail.replace(".", "-")}/${id}`
  );
  const deleteItem = () => {
    remove(deleteRef)
      .then(() => {
        alert("List is deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
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
      {showModal && (
        <PopUp deleteItem={deleteItem} close={handleCloseModal} item={title} />
      )}
    </>
  );
};

export default ListTile;
