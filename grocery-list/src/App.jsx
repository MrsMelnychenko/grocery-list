import React from "react";
import Root from "./pages/Root.jsx";
import Auth from "./pages/Auth.jsx";
import SignIn from "./pages/SignIn.jsx";
import Home from "./pages/Home.jsx";
import PopUp from "./components/PopUp.jsx";
import ErrorPage from "./pages/Error.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Auth /> },
      { path: "sign", element: <SignIn /> },
      { path: "main", element: <Home /> },
    ],
  },
]);

export default function App() {
  // <ThemeProvider theme={myTheme}>
  // const [accExists, setAccExists] = useState(true);
  // let authPage;
  // if (accExists) {
  //   authPage = <Auth checkAccExist={setAccExists} />;
  // } else {
  //   authPage = <SignIn checkAccExist={setAccExists} />;
  // }
  return <RouterProvider router={myRouter} />;
  // <PopUp item={"Tomato"} />
  // {/* <Header isMainPage={true} /> */}
  // {authPage}

  // </ThemeProvider>
}
