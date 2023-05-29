import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AddIcon from "@mui/icons-material/Add";
import styles from "./Header.module.css";

export default function Header(props) {
  return (
    <header className={styles.header}>
      {props.isMainPage ? <MenuIcon /> : <ArrowBackIosIcon />}
      <p className={styles.title}>Grocery lists</p>
      {props.isMainPage && <AddIcon />}
    </header>
  );
}
