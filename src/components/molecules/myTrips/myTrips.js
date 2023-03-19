import React from 'react';
import style from './MyTrips.scss';
import Feed from '../../molecules/feed/Feed';
import { IconButton, Icon } from '@chakra-ui/react';
import { BiEdit } from 'react-icons/bi';
import { useContext } from 'react';
import { UserContext } from "../../../contexts/UserContext.js";



const MyTripDisplay = ({ turer }) => {
    const { userID } = useContext(UserContext);
    const userTrips = turer.filter((trip) => trip.userID === userID);

    return (
        <div className="myTrips-display">
            <Feed trips={userTrips} />
        </div>
    )
};

export default MyTripDisplay;