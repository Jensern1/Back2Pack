import React from 'react';
import style from './profile.scss';
import { IconButton, Icon } from '@chakra-ui/react';
import {BiEdit} from 'react-icons/bi';
import MyTripDisplay from '../myTrips/myTrips';

const ProfileDisplay = ({ name, email, profilePicture }) => {
  return (
    <div className="profile-display-container">
      <div className="profile-info-box">
        <div className="profile-picture-container">
          <img
            src={profilePicture}
            alt={`${name}'s profile`}
            className="profile-picture"
          />
        </div>
        <div className="profile-info">
          <h3>{name}</h3>
          <p>{email}</p>
          <IconButton aria-Label ='Rediger' icon={<BiEdit/>}/>
        </div>
      </div>
      <div className="mytrip-display">
        <h2 className="mytrip-header">Mine turer</h2>
        <MyTripDisplay/>
      </div>
    </div>
  );
};

export default ProfileDisplay;
