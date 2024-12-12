import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Cards = ({ title, content, category }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div className="bg-gray-200 rounded p-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:bg-gray-300">
      <button
        className="font-semibold text-lg flex justify-between items-center w-full"
        onClick={() => {
          setAccordionOpen(!accordionOpen);
        }}
      >
        {title}
        {accordionOpen ? (
          <IoIosArrowUp className="text-blue-400 text-xl" />
        ) : (
          <IoIosArrowDown className="text-blue-400 text-xl" />
        )}
      </button>

      {accordionOpen && (
        <div className="mt-2 flex flex-col gap-2">
          <span className="bg-blue-400 text-white rounded p-1 font-semibold w-max">
            Category: {category}
          </span>
          <p className="font-medium">{content}</p>
          <div className="flex justify-end gap-3 mt-2 ">
            <button className="bg-blue-400 hover:bg-blue-500 text-white px-3 font-medium py-1 rounded">
              Edit
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white px-3 font-medium py-1 rounded">
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;
