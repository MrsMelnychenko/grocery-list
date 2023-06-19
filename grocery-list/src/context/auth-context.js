import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  currentUser: "",
});
export default AuthContext;
