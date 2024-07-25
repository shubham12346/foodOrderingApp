import React from "react";
import Restaurants, { withPromotedLevel } from "./Restaurants";

const RestaurantList = ({ restaurant }) => {
  const RestaurantPromoted = withPromotedLevel(Restaurants);
  console.log("restaurant", restaurant);
  return (
    <div>
      <div className="restaurantContainer">
        {restaurant?.map((restaurantItem, index) =>
          restaurantItem.promoted ? (
            <RestaurantPromoted key={index} restaurant={restaurantItem} />
          ) : (
            <Restaurants key={index} restaurant={restaurantItem} />
          )
        )}
      </div>
    </div>
  );
};

export default RestaurantList;
