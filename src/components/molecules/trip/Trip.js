import React from "react";
import style from "./Trip.module.scss";

function Trip({
  username,
  tripName,
  image,
  description,
  price,
  length,
  rating,
}) {
  //console.log("Rendering trip:", { username, tripName, image, description, price, length, rating });
  //console.log("test");

  // Ensure the rating is between 0 and 5
  const normalizedRating = Math.min(5, Math.max(0, rating));

  // Dynamically adjust size of fields depending on description length
  const descriptionLength = description.length;
  let fontSize = "16px";
  if (descriptionLength > 500) {
    fontSize = "12px";
  } else if (descriptionLength > 300) {
    fontSize = "14px";
  }

  return (
    <div
      className={style.trip}
      style={{ backgroundColor: "#1c2237", color: "white" }}
    >
      <div className={style["trip-header"]}>
        <h2>{tripName}</h2>
        <h3>by {username}</h3>
      </div>
      <div className={style["trip-images"]}>
        <img src={image} alt={tripName} className={style["trip-image"]} />
      </div>

      <div className={style["trip-description"]} style={{ fontSize }}>
        <p>{description}</p>
        <div className={style["trip-footer"]}>
          <div className={style["trip-price"]} style={{ fontSize }}>
            <p>Price: ${price}</p>
          </div>
          <div className={style["trip-length"]} style={{ fontSize }}>
            <p>Length: {length} days</p>
          </div>
          <div className={style["trip-rating"]} style={{ fontSize }}>
            <p>Rating:</p>
            <div className={style["trip-rating-stars"]}>
              {[...Array(normalizedRating)].map((_, index) => (
                <span key={index} className={style["star"]}>
                  &#9733;
                </span>
              ))}
              {[...Array(5 - normalizedRating)].map((_, index) => (
                <span key={index} className={style["star"]}>
                  &#9734;
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trip;
