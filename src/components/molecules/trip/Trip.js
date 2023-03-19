import React, { useState } from 'react';
import style from './Trip.module.scss';

function Trip({
  id,
  username,
  tripName,
  image,
  description,
  price,
  length,
  rating,
  creatorID,
  currentUserID,
  onDelete,
}) {
  const normalizedRating = Math.min(5, Math.max(0, Number(rating) || 0)); // Make sure rating is a number
  const admins = require('../../../admins.json');
  const canDelete =
    creatorID === currentUserID || admins.includes(currentUserID);

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div
      className={style.trip}
    // style={{ backgroundColor: '#1c2237', color: 'white' }}
    >
      <div className={style["trip-wrapper"]}> {/* Add this wrapper */}
        <div className={style['trip-header']}>
          <h2>{tripName}</h2>
          <h3>by {username}</h3>
        </div>
        <div className={style['trip-images']}>
          <img src={image} alt={tripName} className={style['trip-image']} />
        </div>
        <div className={style['trip-description']}>
          <p>{description}</p>
          <div className={style['trip-footer']}>
            <div className={style['trip-price']}>
              <p>Price: ${price}</p>
            </div>
            <div className={style['trip-length']}>
              <p>Length: {length} days</p>
            </div>
            <div className={style['trip-rating']}>
              <p>Rating: </p>
              <div className={style['trip-rating-stars']}>
                {normalizedRating >= 0 &&
                  [...Array(normalizedRating)].map((_, index) => (
                    <span key={index} className={style['star']}>
                      &#9733;
                    </span>
                  ))}
                {normalizedRating >= 0 &&
                  [...Array(5 - normalizedRating)].map((_, index) => (
                    <span key={index} className={style['star']}>
                      &#9734;
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {canDelete && (
        <button className={style['delete-button']} onClick={handleDelete}>
          Delete trip
        </button>
      )}
    </div>
  );
}

export default Trip;