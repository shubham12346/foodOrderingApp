import React, { useEffect, useState } from "react";
import Search from "./Search";
import RestaurantList from "./RestaurantList";
import { getRestaurantData } from "../api/swiggyApi";
import { restaurantData } from "./restaurant";
import Skeleton from "./skeleton/Skeleton";
import Title from "./Title";
const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    // fetchRestaurantData();

    fetchMockData();
  }, []);

  // const fetchRestaurantData = async () => {
  //   const res = await getRestaurantData();
  //   console.log("res", res?.data?.cards[0]);
  // };

  const fetchMockData = () => {
    setLoader(true);
    setTimeout(() => {
      setTheState();
    }, 3000);
  };

  const setTheState = () => {
    setRestaurantList(restaurantData);
    setFilteredData(restaurantData);
    setLoader(false);
  };

  const handleSearchText = (searchText) => {
    console.log("searchText", searchText);
    if (searchText === "" && restaurantList?.length === 0) {
      setFilteredData(restaurantList);
    } else {
      const filteredList = restaurantList?.filter((restaurant) =>
        restaurant?.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setDataAfterSearch(filteredList);
    }
  };

  const setDataAfterSearch = (filteredList) => {
    setLoader(true);
    setTimeout(() => {
      setFilteredData(filteredList);
      setLoader(false);
    }, 2000);
  };
  console.log("filteredData", filteredData);
  return (
    <div className="bodyWrapper">
      <Search handleSearchText={handleSearchText} />
      <Title title={"Restaurant List "} />
      {loader ? (
        <Skeleton />
      ) : (
        filteredData && <RestaurantList restaurant={filteredData} />
      )}
    </div>
  );
};

export default Body;
