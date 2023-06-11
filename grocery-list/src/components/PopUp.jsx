import React from "react";
import styles from "./PopUp.module.css";
import CloseIcon from "@mui/icons-material/Close";

const PopUp = ({ item, close }) => {
  const handleClosePopup = () => {
    close();
  };
  return (
    <div className={styles.card}>
      <div className={styles.close} onClick={handleClosePopup}>
        <CloseIcon />
      </div>
      <p className={styles.text}>Are you sure you want to delete {item}?</p>
      <div className={styles.btns}>
        <button className={styles.delete}>Delete</button>
        <button className={styles.cancel} onClick={handleClosePopup}>
          Cancel
        </button>
      </div>
    </div>
  );
};
export default PopUp;
