import React from "react";
import Auth from "./pages/Auth.js";
import SignIn from "./pages/SignIn.js";
import PopUp from "./components/PopUp.js";
import Header from "./components/Header.js";
import { useState } from "react";

// import { createTheme, ThemeProvider } from "@mui/material/styles";

// const myTheme = createTheme({
//   palette: {
//     background: {
//       main: "#80CB95",
//     },
//     secondary: {
//       main: "#ffd180",
//     },
//   },
// });

export default function App() {
  // <ThemeProvider theme={myTheme}>
  const [accExists, setAccExists] = useState(true);
  let authPage;
  if (accExists) {
    authPage = <Auth checkAccExist={setAccExists} />;
  } else {
    authPage = <SignIn checkAccExist={setAccExists} />;
  }
  return (
    <>
      {/* <PopUp item={"Tomato"} /> */}
      {/* <Header isMainPage={true} /> */}
      {authPage}
    </>
  );
  // </ThemeProvider>
}
