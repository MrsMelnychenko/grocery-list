import React from "react";
import authMainPhoto from "../img/authMainPhoto.jpg";
import styles from "./Auth.module.css";
import { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { Link, useNavigate } from "react-router-dom";
// import { getDatabase } from "firebase/database";

const Auth = () => {
  //   const db = getDatabase();

    const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const inputChangeHandler = (event) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value
    }));
  };

  const navigate = useNavigate();

  const submitAuth = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(formData.email, formData.password)
      .then((response) => {
        console.log("Login successful");
         navigate("main");
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <h1 className={`${styles.centered} ${styles.title}`}>Grocery Map</h1>
      <div className={styles.menu}>
        <img className={styles.img} src={authMainPhoto} alt="Auth Main" />
        <div className={styles.inputContainer}>
          <form onSubmit={submitAuth}>
            <div className={styles.card}>
              <label htmlFor="email" className={styles.p}>Email:</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                className={styles.inputForm}
                placeholder="Enter your Username"
                onChange={inputChangeHandler}
              />
              <label htmlFor="password" className={styles.p}>Password:</label>
              <input
                type="password"
                id="password"
                value={formData.password}
                className={styles.inputForm}
                placeholder="Enter your password"
                onChange={inputChangeHandler}
              />
              <div className={styles.buttonForm}>
                <button className={styles.btnLogIn} onClick={submitAuth}>
                  Log In
                </button>
              </div>
              <p className={styles.createAcc}>
                <Link to="sign">Create an account</Link>
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
};
export default Auth;
