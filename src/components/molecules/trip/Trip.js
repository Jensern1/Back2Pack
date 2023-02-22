import React from "react";
import style from "./Trip.module.scss";


function Trip({ username, tripName, image, description }) {
  console.log("Rendering trip:", { username, tripName, image, description });


  return (
    <div className={style.trip}>
      <div className={style["trip-header"]}>
        <h2>{tripName}</h2>
        <h3>by {username}</h3>
      </div>
      <div className={style["trip-images"]}>
        <img src={image} alt={tripName} className={style["trip-image"]} />
      </div>

      <div className={style["trip-description"]}>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Trip;
