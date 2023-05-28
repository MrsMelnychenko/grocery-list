import React from "react";
import ReactDOM from "react-dom/client";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import App from "./App";
import styles from "./index.module.css";

const firebaseConfig = {
  apiKey: "AIzaSyAdGICN4o3r-qVXD2UYDhananlJpsgbDPs",
  authDomain: "grocery-list-acca1.firebaseapp.com",
  databaseURL: "https://grocery-list-acca1-default-rtdb.firebaseio.com",
  projectId: "grocery-list-acca1",
  storageBucket: "grocery-list-acca1.appspot.com",
  messagingSenderId: "518070325662",
  appId: "1:518070325662:web:4d078c86b4f5ca2fe6868f",
  measurementId: "G-DPQ9MSPC1D",
};

firebase.initializeApp(firebaseConfig);
export const firebaseApp = firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
