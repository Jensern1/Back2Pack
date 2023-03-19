import React from 'react';
import style from './MyTrips.scss';
import Feed from '../../molecules/feed/Feed';
import { IconButton, Icon } from '@chakra-ui/react';
import {BiEdit} from 'react-icons/bi';
import image1 from "../../../assets/mountain.jpg";
import image2 from "../../../assets/beach.jpg";


const getTrips = () => { 
    
     const tripList = [
        {
            username: "John Doe",
            tripName: "Hiking in the Mountains",
            image: image1,
            description:
            "I had a great time hiking in the mountains. The views were breathtaking!",
        },
        {
            username: "Jane Doe",
            tripName: "Beach Vacation",
            image: image2,
            description:
            "My beach vacation was amazing! I loved swimming in the ocean and relaxing on the beach.",
        }, 
        ]
    
    return (
       tripList
    )
};

const MyTripDisplay = () => {
    const trips = getTrips();
    return (
        <div className="myTrips-display">
            <Feed trips={trips}/>
        </div>
    )
};

export default MyTripDisplay;