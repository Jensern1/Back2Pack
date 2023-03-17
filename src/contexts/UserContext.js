import React, { createContext } from 'react';
import { useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [name, setName] = useState(window.localStorage.getItem('name'));
  const [email, setEmail] = useState(window.localStorage.getItem('email'));
  const [token, setToken] = useState(window.localStorage.getItem('token'));
  const [isLoggedIn, setLoggedIn] = useState(
    window.localStorage.getItem('isLoggedIn') === 'true'
  );

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

    window.localStorage.setItem('name', name);
    window.localStorage.setItem('email', email);
    window.localStorage.setItem('token', token);
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
    window.localStorage.setItem('isLoggedIn', 'false');
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
