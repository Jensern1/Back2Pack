import React, { createContext, useEffect } from "react";
import { useState } from "react";
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [name, setName] = useState(window.localStorage.getItem("name"));
  const [email, setEmail] = useState(window.localStorage.getItem("email"));
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [userID, setUserID] = useState(null);
  const [isLoggedIn, setLoggedIn] = useState(
    window.localStorage.getItem("isLoggedIn") === "true"
  );

  function setUser(uid, fname, femail, ftoken) {
    if (fname === null || fname === undefined || fname === "") {
      let splitname = femail.split("@")[0];
      setName(splitname.split(".")[0]);
    } else {
      setName(fname);
    }
    setUserID(uid);
    console.log("UID = " + uid);
    setEmail(femail);
    setToken(ftoken);

    setLoggedIn(true);
    console.log("User set!");

    window.localStorage.setItem("name", name);
    window.localStorage.setItem("email", email);
    window.localStorage.setItem("token", token);
    window.localStorage.setItem("isLoggedIn", "true");
  }

  function loggOut() {
    setName("");
    setEmail("");
    setToken("");
    setLoggedIn(false);
    console.log("User logged out!");

    window.localStorage.setItem("name", "");
    window.localStorage.setItem("email", "");
    window.localStorage.setItem("token", "");
    window.localStorage.setItem("isLoggedIn", "false");
  }

  return (
    <UserContext.Provider
      value={{ userID, name, email, token, isLoggedIn, loggOut, setUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
