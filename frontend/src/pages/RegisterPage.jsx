import React, { useState } from "react";
import MainScreen from "../components/MainScreen/MainScreen.jsx";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const textColor = () => {
    if (!password && !confirmPassword) {
      return ""; // No class applied when inputs are empty
    }
    return password === confirmPassword ? "text-green-500" : "text-red-500";
  };

  const message = () => {
    if (!password && !confirmPassword) {
      return ""; // No message when inputs are empty
    }
    return password === confirmPassword ? "Passwords matched" : "Passwords do not match";
  };
  return (
    <div className="h-screen my-11">
      <div className="flex justify-center">
        <MainScreen title={"REGISTER"} />
      </div>
      <div className="flex gap- px-[256px] items-center justify-between mt-[50px]">
        <div className="w-[500px] flex flex-col gap-6 bg-gray-100 p-3 rounded shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-bold">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              id="name"
              className="px-2 py-1 border font-medium"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-bold">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
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
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              id="password"
              className="px-2 py-1 border font-medium"
              placeholder="Create your password"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="confirmPassword" className="font-bold">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              id="confirmPassword"
              className="px-2 py-1 border font-medium"
              placeholder="Confirm your password"
            />

            <div className={`${textColor()}`}>
              {message()}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="picture" className="font-bold">
              Picture
            </label>
            <input
              type="file"
              name="picture"
              id="picture"
              accept="image/*"
              placeholder="Upload your picture"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-400 hover:bg-blue-500 text-white font-semibold rounded px-2 py-1"
          >
            Submit
          </button>
          <span>
            Existing User?{" "}
            <Link to="/login" className="text-blue-400 hover:text-blue-600">
              Login Here
            </Link>
          </span>
        </div>
        <div>
          <img
            src="./registerImage1.avif"
            alt="registerImg"
            className="h-[430px]"
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

// ui for login and register page completed
// functionality left for both pages
