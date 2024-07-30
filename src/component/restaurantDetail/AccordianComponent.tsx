import React from "react";
import logo from "../../assest/Logo1.jpg";

const AccordianComponent = ({
  restaurantMenu,
  handleSelectedMenu,
  selectedMenu,
}) => {
  return (
    <div>
      {Object?.keys(restaurantMenu)?.map((menuName, index) => {
        if (menuName !== "id") {
          console.log("restaurantMenu?.menuName", restaurantMenu[menuName]);
          return (
            <div className=" lg:mx-32 " key={index}>
              <div
                className="bg-gray-500  flex justify-between items-center px-2 mb-5"
                onClick={() => handleSelectedMenu(restaurantMenu[menuName])}
              >
                <div>
                  <h3 className="text-xl font-semibold ">
                    {menuName?.toUpperCase()} (
                    {restaurantMenu[menuName].length || 0})
                  </h3>
                </div>
                <div>
                  {restaurantMenu[menuName] == selectedMenu ? "⬆️" : "⬇️"}
                </div>
              </div>
              {restaurantMenu[menuName] == selectedMenu && (
                <div className="ransition duration-1000 ease-in-out">
                  {restaurantMenu[menuName]?.map((item, index) => (
                    <div
                      className="flex justify-between p-2 my-2 bg-white t "
                      key={index}
                    >
                      <div className="">
                        <h4 className="font-bold">{item?.name}</h4>
                        <hr className="" />
                        <h4> &#8377;{item?.price} </h4>
                        <h4> Rating ⭐ {item?.rating}</h4>
                        <h4>{item?.deliveryTime} Cooking Time 👩‍🍳🍳</h4>
                      </div>
                      <div className="relative ">
                        <img
                          src={logo}
                          className="w-36 relative "
                          alt="item "
                        />
                        <div className="absolute bg-orange-500 px-6 py-1 rounded-sm bottom-1 left-8 text-white cursor-pointer">
                          Add
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        }
      })}
    </div>
  );
};

export default AccordianComponent;
