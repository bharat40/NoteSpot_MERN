import React, { useState } from "react";
import axios from "axios";
import MainScreen from "../components/MainScreen/MainScreen.jsx";
import { Link } from "react-router-dom";
import ErrorMessage from "../components/Error/ErrorMessage.jsx";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [picture, setPicture] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !name || !password || !confirmPassword) {
      setError(
        "Please fill in all the required fields: Email, Name, Password, and Confirm Password."
      );
      setTimeout(() => setError(false), 4000);
      return;
    }
    if (password != confirmPassword) {
      setError("Password and Confirm password do not match!");
      setTimeout(() => setError(false), 4000);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      setLoading(true);
      // data fetch
      const { data } = await axios.post(
        "https://notespot-backend-cqdi.onrender.com/api/users/",
        { name, email, password, picture },
        config
      );
      setLoading(false);
      localStorage.setItem("userInfo", JSON.stringify(data));
      console.log(data);
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
      setTimeout(() => setError(false), 4000);
    }
  };
  return (
    <div className="h-screen my-11">
      <div className="flex justify-center">
        <MainScreen title={"REGISTER"} />
      </div>
      {error && (
        <div className="flex justify-center my-4">
          <ErrorMessage message={error} />
        </div>
      )}
      <div className="flex gap-[70px] items-center justify-center mt-[50px]">
        <form onSubmit={handleSubmit}>
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
                className="px-2 py-1 border"
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
                className="px-2 py-1 border"
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
                className="px-2 py-1 border"
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
                className="px-2 py-1 border"
                placeholder="Confirm your password"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-400 hover:bg-blue-500 text-white font-semibold rounded px-2 py-1"
            >
              {loading ? "Registering..." : "Submit"}
            </button>
            <span>
              Existing User?{" "}
              <Link to="/login" className="text-blue-400 hover:text-blue-600">
                Login Here
              </Link>
            </span>
          </div>
        </form>
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
