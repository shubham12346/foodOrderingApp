import React, { useEffect, useState } from "react";
import RestaurantDetail from "./RestaurantDetail";
import RestaurantInfoCard from "./RestaurantInfoCard";
import { useParams } from "react-router-dom";
import { restaurantData, restaurantMenus } from "../restaurant.ts";
import AccordionComponent from "./AccordianComponent.tsx";

const RestaurantIndex = () => {
  const { restId } = useParams();
  const [restaurantDetail, setRestaurantDetail] = useState([]);
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const [loader, setLoader] = useState(false);
  let timer;

  useEffect(() => {
    if (restId) {
      setLoader(true);
      getRestaurantDetail(restId);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [restId]);

  const getRestaurantDetail = (restId) => {
    timer = setTimeout(() => {
      const restaurantMenu = restaurantData?.filter(
        (restaurant) => restaurant?.id == restId
      );
      if (restaurantMenu) {
        setRestaurantDetail(restaurantMenu);
        getRestaurantMenu(restaurantMenu[0]?.id);
      }
      setLoader(false);
    }, 2000);
  };

  const getRestaurantMenu = (id) => {
    const menus = restaurantMenus?.filter((item) => item?.id === id);
    setRestaurantMenu(menus);
  };
  console.log("restaurantMenu", restaurantMenu[0]);

  return (
    <div className="border-2 border-black">
      <div className="mx-40  lg:mx-80   my-5">
        {restaurantDetail[0] && (
          <>
            <div className="lg:mx-32">
              <RestaurantInfoCard
                restaurantDetail={restaurantDetail[0] || {}}
              />
            </div>
            <AccordionComponent
              restaurantMenu={Object.entries(restaurantMenu[0])}
            />
          </>
        )}

        {/* <RestaurantDetail /> */}
      </div>
    </div>
  );
};

export default RestaurantIndex;
