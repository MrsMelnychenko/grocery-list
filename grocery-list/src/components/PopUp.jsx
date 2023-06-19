import React from "react";
import styles from "./PopUp.module.css";
import CloseIcon from "@mui/icons-material/Close";
import SmallButton from "../components/SmallButton";

const PopUp = ({ item, close, deleteItem }) => {
  const handleClosePopup = () => {
    close();
  };
  const handleDeleteItem = () => {
    deleteItem();
  };
  return (
    <div className={styles.card}>
      <div className={styles.close} onClick={handleClosePopup}>
        <CloseIcon />
      </div>
      <p className={styles.text}>Are you sure you want to delete {item}?</p>
      <div className={styles.btns}>
        <SmallButton onClick={handleDeleteItem} color={"#F96B6B"}>
          Delete
        </SmallButton>
        <SmallButton onClick={handleClosePopup}>Cancel</SmallButton>
      </div>
    </div>
  );
};
export default PopUp;
