import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { MdArrowDropUp } from "react-icons/md";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-blue-400 flex justify-center items-center gap-80 py-4 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
      <div className="flex gap-1 justify-center items-center ">
        <img src="./logo.png" alt="logo" className="w-[50px] " />
        <span className="font-bold text-white text-lg">NoteSpot</span>
      </div>
      <div>
        <input
          type="text"
          placeholder="search here"
          className="px-2 rounded shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] py-2"
        />
      </div>
      <div className="flex gap-4">
        <div>
          <button className="font-bold text-gray-100 hover:border-b">
            My notes
          </button>
        </div>
        <div className="relative">
          <button
            className="font-bold text-gray-100 flex items-center"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Bharat
            <span className="text-2xl">
              {isOpen ? <MdArrowDropUp /> : <MdArrowDropDown />}
            </span>
          </button>
          {isOpen && (
            <div className="absolute shadow bg-white border flex flex-col justify-center gap-1 py-1 items-center top-7 w-[100px]">
              <button className="hover:bg-gray-200 w-full active:bg-gray-300">
                Profile
              </button>
              <button className="hover:bg-gray-200 w-full active:bg-gray-300">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
