import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AddIcon from "@mui/icons-material/Add";
import styles from "./Header.module.css";

const Header = ({ isMainPage }) => {
  return (
    <header className={styles.header}>
      {isMainPage ? <MenuIcon /> : <ArrowBackIosIcon />}
      <p className={styles.title}>Grocery lists</p>
      {isMainPage && <AddIcon />}
    </header>
  );
};

export default Header;
