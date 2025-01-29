import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { toast } from "react-toastify";

const Cards = ({ id, title, content, category, date, onDelete, onUpdate }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedContent, setEditedContent] = useState(content);
  const [editedCategory, setEditedCategory] = useState(category);
  const deleteHandler = async () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    await axios.delete(`https://notespot-mern-backend.onrender.com/api/notes/${id}`, config);
    onDelete(id);
    console.log("note deleted!");
  };
  const updateHandler = () => {
    setIsEditing(true);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.put(
        `https://notespot-mern-backend.onrender.com/api/notes/${id}`,
        {
          title: editedTitle,
          content: editedContent,
          category: editedCategory,
        },
        config
      );
      onUpdate(data);
      setIsEditing(false);
      toast.success("Note Updated!");
    } catch (error) {
      console.log(error);
    }
  };
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
            <i className="text-slate-400 text-sm">Created on-{date}</i>
            <div className="flex justify-end gap-3 mt-2 ">
              <button
                className="bg-green-400 hover:bg-green-500 text-white px-3  py-1 rounded"
                onClick={updateHandler}
              >
                Edit
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-3  py-1 rounded"
                onClick={deleteHandler}
              >
                Delete
              </button>
            </div>
          </div>
          {isEditing && (
            <form
              className="bg-gray-100 p-3 rounded mt-3 shadow-sm"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-2">
                <input
                  className="border p-2 rounded"
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  placeholder="Edit title"
                />
                <textarea
                  className="border p-2 rounded"
                  rows="4"
                  value={editedContent}
                  onChange={(e) => setEditedContent(e.target.value)}
                  placeholder="Edit content"
                ></textarea>
                <input
                  className="border p-2 rounded"
                  type="text"
                  value={editedCategory}
                  onChange={(e) => setEditedCategory(e.target.value)}
                  placeholder="Edit category"
                />
                <div className="flex gap-3 mt-2">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                    type="submit"
                  >
                    Save
                  </button>
                  <button
                    className="bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 rounded"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default Cards;
