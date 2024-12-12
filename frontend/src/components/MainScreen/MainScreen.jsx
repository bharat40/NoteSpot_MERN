import React from "react";

const MainScreen = ({ title }) => {
  return (
    <div className="w-[1000px] flex flex-col">
      <h1 className="text-3xl font-semibold text-left">
        {title}
      </h1>
      <hr className=" border-black w-full" />
    </div>
  );
};

export default MainScreen;
