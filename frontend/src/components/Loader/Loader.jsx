import React from "react";

const Loader = () => {
  console.log("loader is rendering...");
  return (
    <div className="h-screen w-full flex justify-center ">
      <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
    </div>
  );
};

export default Loader;
