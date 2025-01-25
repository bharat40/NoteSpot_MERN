import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Cards = ({ title, content, category, date }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div className="bg-gray-50 rounded p-3  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] ">
      <button
        className="font-medium text-lg flex justify-between items-center w-full"
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
        <div className="mt-2 flex flex-col gap-5">
          <span className="bg-blue-400 text-white rounded p-1 font-semibold w-max">
            Category: {category}
          </span>
          <p className="border-t pt-1">{content}</p>

          <div className="flex justify-between items-center">
            <span className="text-slate-400 text-sm">Created on-{date}</span>
            <div className="flex justify-end gap-3 mt-2 ">
              <button className="bg-green-400 hover:bg-green-500 text-white px-3  py-1 rounded">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white px-3  py-1 rounded">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;
