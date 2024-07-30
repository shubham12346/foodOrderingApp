import React from "react";

const AccordianComponent = ({ restaurantMenu }) => {
  console.log("restaurantMenu", restaurantMenu);
  return (
    <div>
      <div className="bg-gray-500 mx-32 ">
        <div className="p-3  flex justify-between ">
          <h3 className="text-xl font-semibold">
            {restaurantMenu[1][0]} ({restaurantMenu[1][1]?.length})
          </h3>
          <div>⬇️</div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default AccordianComponent;
