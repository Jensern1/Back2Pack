import React from "react";

import Trip from "../trip/Trip.js";
import style from "./Feed.module.scss";

function Feed(props) {
  const { trips } = props;

  return (
    <div className={style.feed}>
      <div className={style.container}>
        {trips.map((trip, index) => (
          <Trip
            key={index}
            username={trip.username}
            tripName={trip.tripName}
            image={trip.image}
            description={trip.description}
          />
        ))}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Feed;
