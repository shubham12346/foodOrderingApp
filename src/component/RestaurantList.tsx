import React from "react";
import Restaurants from "./Restaurants";

const RestaurantList = ({ restaurant }) => {
  console.log("restaurant", restaurant);
  return (
    <div>
      <h1>Restaurant List </h1>
      <div className="restaurantContainer">
        {restaurant?.map((restaurant, index) => (
          <Restaurants key={index} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
