import React, { createContext } from 'react';
import { useState } from 'react';
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [name, setName] = useState(window.localStorage.getItem('name'));
  const [email, setEmail] = useState(window.localStorage.getItem('email'));
  const [token, setToken] = useState(window.localStorage.getItem('token'));
  const [userID, setUserID] = useState(window.localStorage.setItem('uid'));
  const [isLoggedIn, setLoggedIn] = useState(
    window.localStorage.getItem('isLoggedIn') === 'true'
  );

  function setUser(fuid, fname, femail, ftoken) {
    let newName = fname;
    if (fname === null || fname === undefined || fname === '') {
      let splitname = femail.split('@')[0];
      newName = splitname.split('.')[0];
    }

    setName(newName);
    setUserID(fuid);
    setEmail(femail);
    setToken(ftoken);
    setLoggedIn(true);

    console.log('User set!');

    window.localStorage.setItem('name', newName);
    window.localStorage.setItem('email', femail);
    window.localStorage.setItem('token', ftoken);
    window.localStorage.setItem('uid', fuid);
    window.localStorage.setItem('isLoggedIn', 'true');
  }

  function loggOut() {
    setName('');
    setEmail('');
    setToken('');
    setLoggedIn(false);
    console.log('User logged out!');

    window.localStorage.setItem('name', '');
    window.localStorage.setItem('email', '');
    window.localStorage.setItem('token', '');
    window.localStorage.setItem('uid', '');
    window.localStorage.setItem('isLoggedIn', 'false');
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
