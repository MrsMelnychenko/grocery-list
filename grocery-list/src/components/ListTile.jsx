import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styles from "./ListTile.module.css";

const ListTile = ({ title })=> {
  return (
    <div className={styles.card}>
        <ShoppingCartIcon /> 
        <p className={styles.title}>{title}</p>
        <div className={styles.controlbtn}>
            <EditIcon />
            <CloseIcon />
        </div>
    </div>
  );
}

export default ListTile; 