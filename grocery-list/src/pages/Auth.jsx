import React from "react";
import authMainPhoto from "../assets/authMainPhoto.jpg";
import styles from "./Auth.module.css";
import Input from "../components/Input";
import BigButton from "../components/BigButton";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
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
      [id]: value,
    }));
  };

  const navigate = useNavigate();

  const submitAuth = (event) => {
    event.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, formData.email, formData.password)
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
              <label htmlFor="email" className={styles.p}>
                Email:
              </label>
              <Input
                type="email"
                id="email"
                value={formData.email}
                placeholder="Enter your Username"
                onChange={inputChangeHandler}
              />
              <label htmlFor="password" className={styles.p}>
                Password:
              </label>
              <Input
                type="password"
                id="password"
                value={formData.password}
                placeholder="Enter your password"
                onChange={inputChangeHandler}
              />
              <div className={styles.buttonForm}>
                <BigButton
                  googlebtn={"false"}
                  disabled={formData.email === "" && formData.password === ""}
                >
                  Log In
                </BigButton>
              </div>
              <p className={styles.createAcc}>
                <Link to="sign">Create an account</Link>
              </p>
            </div>
            <h3 className={styles.centered}>or</h3>

            <div>
              <BigButton googlebtn={"true"}>Log In with Google</BigButton>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Auth;
