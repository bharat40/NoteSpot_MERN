import React, { useState } from "react";
import axios from "axios";
import MainScreen from "../components/MainScreen/MainScreen.jsx";
import { Link, useNavigate } from "react-router-dom";
import ErrorMessage from "../components/Error/ErrorMessage.jsx";
import { setUserName } from "../features/username/UserSlice.js";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in both the email and password fields!");
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
        "http://localhost:5000/api/users/login",
        {
          email,
          password,
        },
        config
      );
      dispatch(setUserName(data.name || "Testing")); // dispatching user name from data object received from backend
      localStorage.setItem("userInfo", JSON.stringify(data));
      setError(false);
      setLoading(false);
      navigate("/mynotes");
    } catch (error) {
      setError(
        error.response?.data?.message || "An unexcepted error occurred!"
      );
      setLoading(false);
      setTimeout(() => setError(false), 4000);
    }
  };

  return (
    <div className="h-screen my-11">
      <div className="flex justify-center">
        <MainScreen title={"LOGIN"} />
      </div>
      {/* display error message here */}
      {error && (
        <div className="flex justify-center my-4">
          <ErrorMessage message={error} />
        </div>
      )}
      <div className="flex gap- px-[256px] items-center justify-between mt-[50px]">
        <form onSubmit={handleSubmit}>
          <div className="w-[500px] flex flex-col gap-6 bg-gray-100 p-3 rounded shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-bold">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
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
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                id="password"
                className="px-2 py-1 border font-medium"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-400 hover:bg-blue-500 text-white font-semibold rounded px-2 py-1"
            >
              {loading ? "Logging in, please wait..." : "Submit"}
            </button>

            <span>
              New User?{" "}
              <Link
                to="/register"
                className="text-blue-400 hover:text-blue-600"
              >
                Register Here
              </Link>
            </span>
          </div>
        </form>
        <div>
          <img
            loading="lazy"
            src="./loginImage3.png"
            alt="loginImg"
            className="h-[330px]"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
