import React from "react";
import Restaurants from "./Restaurants";

const RestaurantList = ({ restaurant }) => {
  return (
    <div>
      <div className="restaurantContainer">
        {restaurant?.map((restaurant, index) => (
          <Restaurants key={index} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
