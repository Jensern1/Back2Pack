import React from 'react';
import Navbar from '../../components/molecules/navbar/Navbar.js';
import { UserContext } from "../../../contexts/UserContext.js";
import ProfileDisplay from './components/molecules/profile/profile.js';
//Importert profilbilde, bør kunne hentes
import profilePicture from "./components/molecules/profile/strand.jpg"

const { name, email } = useContext(UserContext);

function User() {
  return (
    <>
      <Navbar></Navbar>
      <p>Hello User!</p>
      <ProfileDisplay
        name={name}
        email={email}
        profilePicture={profilePicture}
      />
    </>
  );
}

export default User;
