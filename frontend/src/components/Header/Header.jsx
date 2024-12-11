import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { MdArrowDropUp } from "react-icons/md";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-blue-400 flex justify-center items-center gap-80 py-4">
      <div className="flex gap-1 justify-center items-center">
        <img src="./logo.png" alt="logo" className="w-[50px]" />
        <span className="font-bold text-white text-lg">NoteZipper</span>
      </div>
      <div>
        <input
          type="text"
          placeholder="search here"
          className="px-2 rounded shadow-md py-2"
        />
      </div>
      <div className="flex gap-4">
        <div>
          <button className="font-bold text-gray-100">My notes</button>
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
            <div className="absolute bg-white border flex flex-col justify-center gap-1 py-1 items-center top-7 w-[100px]">
              <button>Profile</button>
              <button>Logout</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
