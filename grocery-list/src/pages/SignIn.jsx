import React from "react";
import authMainPhoto from "../img/authMainPhoto.jpg";
import styles from "./SignIn.module.css";
import { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { Link } from "react-router-dom";
// import { getDatabase } from "firebase/database";

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    passwdRepeat: ""
  });

  const inputChangeHandler = (event) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value
    }));
  };


  const createAcc = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(formData.email, formData.password)
      .then((response) => {
        console.log("acc was created!");
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <h1 className={`${styles.centered} ${styles.title}`}>Grocery Map</h1>
      <div className={styles.menu}>
        <img className={styles.img} src={authMainPhoto} alt="Auth Main" />
        <div className={styles.inputContainer}>
          <form onSubmit={createAcc}>
            <div className={styles.card}>
              <div>
                  <label htmlFor="username" className={styles.p}>Username:</label>
                <input
                  type="text"
                  id="username"
                  value={formData.username}
                  className={styles.inputForm}
                  placeholder="Enter your Username"
                  onChange={inputChangeHandler}
                />
                 <label htmlFor="email" className={styles.p}>Email:</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  className={styles.inputForm}
                  placeholder="Enter your Email"
                  onChange={inputChangeHandler}
                />
                 <label htmlFor="password" className={styles.p}>Password:</label>
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  className={styles.inputForm}
                  placeholder="Enter your password"
                  autoComplete="on"
                  onChange={inputChangeHandler}
                />
                <label htmlFor="passwdRepeat" className={styles.p}>Repeat your password:</label>
                <input
                  type="password"
                  id="passwdRepeat"
                  value={formData.passwdReapet}
                  className={styles.inputForm}
                  placeholder="Repeat your password"
                  autoComplete="on"
                  onChange={inputChangeHandler}
                />
              </div>
              <div className={styles.buttonForm}>
                <button className={styles.btnLogIn} onClick={createAcc}>
                  Create an account
                </button>
              </div>
              <p className={styles.p}>Already have an account?</p>
              <p className={styles.createAcc}>
                <Link to="/">Log In</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default SignIn;
