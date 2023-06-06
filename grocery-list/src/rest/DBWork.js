import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getDatabase, ref, set, child, remove } from "firebase/database";
import { useState } from "react";

export default function DB() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [passwd, setPasswd] = useState("");
  const [accExists, setAccExists] = useState(false);

  const db = getDatabase();

  const AddData = () => {
    const userRef = ref(db, "users/" + userName);

    set(userRef, {
      passwd: passwd,
      email: email,
    })
      .then(() => {
        alert("Data is stored!");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const DeleteUser = () => {
    const userRef = child(ref(db, "users"), userName);

    remove(userRef)
      .then(() => {
        alert("User is deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };
  const passwdChangeHandler = (event) => {
    setPasswd(event.target.value);
  };
  const submitAuth = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, passwd)
      .then((response) => {
        setAccExists(true);
        console.log("Your account was created!");
      })
      .catch((error) => console.log(error));
    // firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(email, passwd)
    //   .catch((error) => console.log(error));
  };
  return (
    <>
      {accExists ? (
        <h1>Hello User!</h1>
      ) : (
        <div>
          {" "}
          <input
            id="email"
            value={email}
            type="email"
            placeholder="Enter your email"
            onChange={emailChangeHandler}
          />
          <input
            id="userName"
            value={userName}
            type="userName"
            placeholder="Enter your UserName"
            onChange={userNameChangeHandler}
          />
          <input
            id="passwd"
            value={passwd}
            type="password"
            placeholder="Enter your password"
            onChange={passwdChangeHandler}
          />
          <input type="submit" onClick={AddData} />{" "}
          <input type="submit" value="Delete" onClick={DeleteUser} />{" "}
        </div>
      )}
    </>
  );
}
