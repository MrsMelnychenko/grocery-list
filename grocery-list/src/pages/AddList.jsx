import React from "react";
import Block from "../components/Block";
import BigButton from "../components/BigButton";
import SmallButton from "../components/SmallButton";
import Header from "../components/Header";
import styles from "./AddList.module.css";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { getDatabase, ref, push } from "firebase/database";
import { useState } from "react";
import { useCookies } from "react-cookie";

const AddProduct = () => {
  const [listTitle, setListTitle] = useState("");
  const [cookies] = useCookies(["userEmail"]);

  const db = getDatabase();
  const saveList = () => {
    const userRef = ref(db, "Lists/" + cookies.userEmail.replace(".", "-"));
    console.log(cookies.userEmail, userRef);
    push(userRef, {
      name: listTitle,
    })
      .then(() => {
        alert("Data is stored!");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const listTitleChangeHandler = (event) => {
    setListTitle(event.target.value);
  };
  return (
    <div className={styles.container}>
      <Header />
      <br />
      <div className={styles.card}>
        <div className={styles.btns}>
          <SmallButton color={"#80CB95"} onClick={saveList}>
            Save
          </SmallButton>
          <SmallButton color={"#F46D6D"}>Delete</SmallButton>
        </div>
        <div>
          <Block
            istitle={"true"}
            placeholder="Name your list"
            value={listTitle}
            onChange={listTitleChangeHandler}
          ></Block>
        </div>

        <BigButton>
          <ControlPointIcon sx={{ color: "black" }} />
          Add Product
        </BigButton>
      </div>
    </div>
  );
};

export default AddProduct;
