import React, { useContext } from "react";
import Trip from "../trip/Trip.js";
import style from "./Feed.module.scss";
import { UserContext } from "../../../contexts/UserContext.js";

function Feed(props) {
  const { trips, onDelete } = props;
  const { userID } = useContext(UserContext);

  return (
    <div className={style.feed}>
      <div className={style.container}>
        {trips.map((trip, index) => (
          <Trip
            key={index}
            id={trip.id}
            username={trip.username}
            tripName={trip.tripName}
            image={trip.image}
            description={trip.description}
            price={trip.price}
            length={trip.length}
            rating={trip.rating}
            creatorID={trip.userID}
            currentUserID={userID}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default Feed;
