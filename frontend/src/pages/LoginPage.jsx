import React from "react";
import MainScreen from "../components/MainScreen/MainScreen.jsx";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="h-screen my-11">
      <div className="flex justify-center">
        <MainScreen title={"LOGIN"} />
      </div>
      <div className="flex gap- px-[256px] items-center justify-between mt-[50px]">
        <div className="w-[500px] flex flex-col gap-6 bg-gray-100 p-3 rounded shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-bold">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="px-2 py-1 border font-medium"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="font-bold">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="px-2 py-1 border font-medium"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-400 hover:bg-blue-500 text-white font-semibold rounded px-2 py-1"
          >
            Submit
          </button>
          <span>
            New User?{" "}
            <Link to="/register" className="text-blue-400 hover:text-blue-600">
              Register Here
            </Link>
          </span>
        </div>
        <div>
          <img src="./loginImage3.png" alt="loginImg" className="h-[330px]" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

// basic template created
// functionality is not currently written
// enhance ui
