import React, { useState, useEffect } from "react";
import Root from "./pages/Root.jsx";
import Auth from "./pages/Auth.jsx";
import SignIn from "./pages/SignIn.jsx";
import Home from "./pages/Home.jsx";
import AddList from "./pages/AddList.jsx";
import ErrorPage from "./pages/Error.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthContext from "./context/auth-context";
import { getAuth } from "firebase/auth";
import { CookiesProvider } from "react-cookie";

export default function App() {
  const [isLoggedState, setIsLogged] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Auth loginStatus={setIsLogged} user={setCurrentUser} />,
        },
        { path: "sign", element: <SignIn loginStatus={setIsLogged} /> },
        { path: "main", element: <Home /> },
        { path: "addProduct", element: <AddList /> },
      ],
    },
  ]);
  return (
    <CookiesProvider>
      <AuthContext.Provider
        value={{
          isLoggedIn: isLoggedState,
          currentUserEmail: currentUser || "",
        }}
      >
        <RouterProvider router={myRouter} />
      </AuthContext.Provider>
    </CookiesProvider>
  );
}
