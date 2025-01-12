import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  // useEffect(() => {
  //   const userInfo = localStorage.getItem("userInfo");
  //   if (userInfo) {
  //     history.push("/mynotes");
  //   }
  // }, [history]);
  return (
    <div className="my-11 flex flex-col justify-center items-center">
      <div className="flex items-center justify-center gap-[400px]">
        <div>
          <img src="./mainImage1.png" alt="img1" className="w-[400px]" />
        </div>
        <div className=" flex flex-col gap-1">
          <span className="font-semibold text-xl">
            Welcome to{" "}
            <mark className="bg-blue-400 px-1 text-white">NoteSpot</mark>
          </span>
          <span className="font-semibold text-xl">
            Organize your life, one note at a time.
          </span>
          <div className="flex items-center gap-3">
            <Link to="/register">
              <button className="bg-blue-400 px-2 py-1 rounded text-white font-semibold hover:bg-blue-500">
                Register
              </button>
            </Link>
            <span className="font-semibold text-xl">or</span>
            <Link to="/login">
              <button className="bg-blue-400 px-2 py-1 rounded text-white font-semibold hover:bg-blue-500">
                Login
              </button>
            </Link>
            <span className="font-semibold text-xl">to begin</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-[300px] w-[1300px]">
        <div className="font-semibold text-xl">
          {" "}
          Start capturing your thoughts, ideas, and plans in one <br />{" "}
          place.From ideas to plans, everything is just a click away."
        </div>
        <div>
          <img src="./mainImage2.png" alt="img1" className="w-[400px]" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
