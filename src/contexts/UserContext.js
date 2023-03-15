import React, { createContext } from 'react';
import { useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  function setUser(fname, femail, ftoken) {
    if (fname === null || fname === undefined || fname === '') {
      setName(femail.split('.')[0]);
    } else {
      setName(fname);
    }
    setEmail(femail);
    setToken(ftoken);
    setLoggedIn(true);
    console.log('User set!');
  }

  function loggOut() {
    setName('');
    setEmail('');
    setToken('');
    setLoggedIn(false);
    console.log('User logged out!');
  }

  return (
    <UserContext.Provider
      value={{ name, email, token, isLoggedIn, loggOut, setUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
