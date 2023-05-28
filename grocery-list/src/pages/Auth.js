import React from "react";
import authMainPhoto from "../img/authMainPhoto.jpg";
import styles from "./Auth.module.css";
import { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import { getDatabase } from "firebase/database";

export default function Auth(props) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPasswd, setEnteredPasswd] = useState("");

  //   const db = getDatabase();

  const userNameChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const passwdChangeHandler = (event) => {
    setEnteredPasswd(event.target.value);
  };
  const submitAuth = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(enteredEmail, enteredPasswd)
      .then((response) => {
        console.log("Login successful");
        alert(" Welcome to Grocery Map!");
      })
      .catch((error) => console.log(error));
  };
  const goToCreateAcc = () => {
    props.checkAccExist(false);
  };
  return (
    <>
      <h1 className={`${styles.centered} ${styles.title}`}>Grocery Map</h1>
      <div className={styles.menu}>
        <img className={styles.img} src={authMainPhoto} alt="Auth Main" />
        <div className={styles.inputContainer}>
          <form>
            <div className={styles.card}>
              <div>
                <p className={styles.p}>Email:</p>
                <label htmlFor="email" />
                <input
                  type="email"
                  id="email"
                  value={enteredEmail}
                  className={styles.inputForm}
                  placeholder="Enter your Username"
                  onChange={userNameChangeHandler}
                />
                <p className={styles.p}>Password:</p>
                <label htmlFor="passwd" />
                <input
                  type="password"
                  id="passwd"
                  value={enteredPasswd}
                  className={styles.inputForm}
                  placeholder="Enter your password"
                  onChange={passwdChangeHandler}
                />
              </div>
              <div className={styles.buttonForm}>
                <button className={styles.btnLogIn} onClick={submitAuth}>
                  Log In
                </button>
              </div>
              <p className={styles.createAcc} onClick={goToCreateAcc}>
                Create an account
              </p>
            </div>
            <h3 className={styles.centered}>or</h3>

            <div>
              <button className={`${styles.btnLogIn} ${styles.btnLogInG}`}>
                Log In with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
