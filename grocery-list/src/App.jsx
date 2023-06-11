import React from "react";
import Root from "./pages/Root.jsx";
import Auth from "./pages/Auth.jsx";
import SignIn from "./pages/SignIn.jsx";
import Home from "./pages/Home.jsx";
import AddProduct from "./pages/AddProduct.jsx";
import ErrorPage from "./pages/Error.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Auth /> },
      { path: "sign", element: <SignIn /> },
      { path: "main", element: <Home /> },
      { path: "addProduct", element: <AddProduct /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={myRouter} />;
}
