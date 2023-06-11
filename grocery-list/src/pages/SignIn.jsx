import React from "react";
import authMainPhoto from "../assets/authMainPhoto.jpg";
import styles from "./SignIn.module.css";
import Input from "../components/Input";
import useInput from "../hooks/use-Input";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { Link, useNavigate } from "react-router-dom";
import { getDatabase, ref, set } from "firebase/database";
import BigButton from "../components/BigButton";

const SignIn = () => {
  const {
    value: enteredUserName,
    valueIsValid: userNameIsValid,
    hasError: userNameHasError,
    valueChangeHandler: userNameChangeHandler,
    inputBlurHandler: userNameBlurHandler,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredEmail,
    valueIsValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((value) => value.includes("@"));
  const {
    value: enteredPassword,
    valueIsValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput((value) => value.length > 6);
  const {
    value: enteredRepeatedPswd,
    valueIsValid: repeatedPswdIsValid,
    hasError: repeatedPswdHasError,
    valueChangeHandler: repeatedPswdIChangeHandler,
    inputBlurHandler: repeatedPswdBlurHandler,
  } = useInput((value) => value === enteredPassword);

  const userNameStyle = userNameHasError ? "true" : "false";
  const emailStyle = emailHasError ? "true" : "false";
  const passwordStyle = passwordHasError ? "true" : "false";
  const repeatedPswdStyle = repeatedPswdHasError ? "true" : "false";

  const navigate = useNavigate();
  const db = getDatabase();

  let formIsValid = false;
  if (userNameIsValid && emailIsValid & passwordIsValid & repeatedPswdIsValid) {
    formIsValid = true;
  }
  const submitForm = (event) => {
    event.preventDefault();
    if (!userNameIsValid) {
      return;
    } else {
      console.log("Submitted!");
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          enteredEmail,
          enteredPassword,
          enteredUserName
        )
        .then((response) => {
          alert("acc was created!");

          const userRef = ref(db, "users/" + enteredUserName);

          set(userRef, {
            passwd: enteredPassword,
            email: enteredUserName,
          })
            .then(() => {
              alert("Data is stored!");
              navigate("/main");
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <>
      <h1 className={`${styles.centered} ${styles.title}`}>Grocery Map</h1>
      <div className={styles.menu}>
        <img className={styles.img} src={authMainPhoto} alt="Auth Main" />
        <div className={styles.inputContainer}>
          <form onSubmit={submitForm}>
            <div className={styles.card}>
              <div>
                <label htmlFor="username" className={styles.p}>
                  Username:
                </label>
                <Input
                  type="text"
                  id="username"
                  value={enteredUserName}
                  className={styles.inputForm}
                  placeholder="Enter your Username"
                  onChange={userNameChangeHandler}
                  onBlur={userNameBlurHandler}
                  error={userNameStyle}
                />
                {userNameHasError && (
                  <p className={styles.errorMessage}>Username is invalid!</p>
                )}
                <label htmlFor="email" className={styles.p}>
                  Email:
                </label>
                <Input
                  type="email"
                  id="email"
                  value={enteredEmail}
                  className={styles.inputForm}
                  placeholder="Enter your Email"
                  onChange={emailChangeHandler}
                  onBlur={emailBlurHandler}
                  error={emailStyle}
                />
                {emailHasError && (
                  <p className={styles.errorMessage}>Email is invalid!</p>
                )}
                <label htmlFor="password" className={styles.p}>
                  Password:
                </label>
                <Input
                  type="password"
                  id="password"
                  value={enteredPassword}
                  className={styles.inputForm}
                  placeholder="Enter your password"
                  autoComplete="on"
                  onChange={passwordChangeHandler}
                  onBlur={passwordBlurHandler}
                  error={passwordStyle}
                />
                {passwordHasError && (
                  <p className={styles.errorMessage}>Password is too short!</p>
                )}
                <label htmlFor="passwdRepeat" className={styles.p}>
                  Repeat your password:
                </label>
                <Input
                  type="password"
                  id="passwdRepeat"
                  value={enteredRepeatedPswd}
                  className={styles.inputForm}
                  placeholder="Repeat your password"
                  autoComplete="on"
                  onChange={repeatedPswdIChangeHandler}
                  onBlur={repeatedPswdBlurHandler}
                  error={repeatedPswdStyle}
                />
              </div>
              {repeatedPswdHasError && (
                <p className={styles.errorMessage}>Passwords do not match</p>
              )}
              <div className={styles.buttonForm}>
                <BigButton className={styles.btnLogIn} disabled={!formIsValid}>
                  Create an account
                </BigButton>
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
