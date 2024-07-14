import React from "react";

const url = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/`;
const cloudId = "e0839ff574213e6f35b3899ebf1fc597";
const Restaurants = (props) => {
  const { name, rating, time, type, location, imageUrl } = props.restaurant;
  return (
    <div className="restaurantCard">
      <img src={imageUrl} alt="" srcset="" className="cardImg" />
      <h2>{name}</h2>
      <h3>
        <span>*</span>
        {rating}
        <span>.</span>
        <span>{time}</span>
      </h3>
      <h4>{type}</h4>
      <h4>{location}</h4>
    </div>
  );
};

export default Restaurants;
