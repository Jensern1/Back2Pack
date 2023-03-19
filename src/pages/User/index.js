import React, { useContext } from 'react';
import Navbar from '../../components/molecules/navbar/Navbar.js';
import { UserContext } from "../../contexts/UserContext.js";
import ProfileDisplay from '../../components/molecules/profile/profile.js';
//Importert profilbilde, bør kunne hentes
import profilePicture from "../../assets/paris.jpg"



function User({ turer }) {
  const { name, email } = useContext(UserContext);

  return (
    <>
      <Navbar></Navbar>
      <p>Hello User!</p>
      <ProfileDisplay
        name={name}
        email={email}
        profilePicture={profilePicture}
        turer={turer}
      />
    </>
  );
}

export default User;
