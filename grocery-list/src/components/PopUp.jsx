import React from "react";
import styles from "./PopUp.module.css";
import CloseIcon from "@mui/icons-material/Close";

export default function PopUp({ item }) {
  return (
    <div className={styles.card}>
      <div className={styles.close}>
        <CloseIcon />
      </div>
      <p className={styles.text}>Are you sure you want to delete {item}?</p>
      <div className={styles.btns}>
        <button className={styles.delete}>Delete</button>
        <button className={styles.cancel}>Cancel</button>
      </div>
    </div>
  );
}
