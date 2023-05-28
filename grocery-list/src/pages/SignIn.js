import React from "react";
import authMainPhoto from "../img/authMainPhoto.jpg";
import styles from "./SignIn.module.css";
import { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import { getDatabase } from "firebase/database";

export default function Auth(props) {
  const [enteredUsername, setEnteredUserName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPasswd, setEnteredPasswd] = useState("");
  const [repeatedPasswd, setRepeatedPasswd] = useState("");

  //   const db = getDatabase();

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const passwdChangeHandler = (event) => {
    setEnteredPasswd(event.target.value);
  };
  const repeatPasswdChangeHandler = (event) => {
    setRepeatedPasswd(event.target.value);
  };
  const createAcc = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(enteredEmail, enteredPasswd)
      .then((response) => {
        console.log("acc was created!");
        alert("Your account was created!");
      })
      .catch((error) => console.log(error));
  };
  const goToLogIn = () => {
    props.checkAccExist(true);
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
                <p className={styles.p}>Username:</p>
                <label htmlFor="username" />
                <input
                  type="text"
                  id="username"
                  value={enteredUsername}
                  className={styles.inputForm}
                  placeholder="Enter your Username"
                  onChange={userNameChangeHandler}
                />
                <p className={styles.p}>Email:</p>
                <label htmlFor="enail" />
                <input
                  type="email"
                  id="email"
                  value={enteredEmail}
                  className={styles.inputForm}
                  placeholder="Enter your Email"
                  onChange={emailChangeHandler}
                />
                <p className={styles.p}>Password:</p>
                <label htmlFor="passwd" />
                <input
                  type="password"
                  id="passwd"
                  value={enteredPasswd}
                  className={styles.inputForm}
                  placeholder="Enter your password"
                  autoComplete="on"
                  onChange={passwdChangeHandler}
                />
                <p className={styles.p}>Confirm your password:</p>
                <label htmlFor="passwdRepeat" />
                <input
                  type="password"
                  id="passwdRepeat"
                  value={repeatedPasswd}
                  className={styles.inputForm}
                  placeholder="Repeat your password"
                  autoComplete="on"
                  onChange={repeatPasswdChangeHandler}
                />
              </div>
              <div className={styles.buttonForm}>
                <button className={styles.btnLogIn} onClick={createAcc}>
                  Create an account
                </button>
              </div>
              <p className={styles.p}>Already have an account?</p>
              <p className={styles.createAcc} onClick={goToLogIn}>
                Log In
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
