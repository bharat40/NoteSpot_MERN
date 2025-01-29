import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import MainScreen from "../components/MainScreen/MainScreen";
import { useNavigate } from "react-router-dom";
const CreateNotePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    await axios.post(
      "https://notespot-mern-backend.onrender.com/create",
      {
        title: title,
        content: content,
        category: category,
      },
      config
    );
    toast.success("Note Created!");
    navigate("/mynotes");
    // clean up
    setTitle("");
    setContent("");
    setCategory("");
    console.log("form submitted");
  };
  const handleReset = () => {
    setTitle("");
    setContent("");
    setCategory("");
    console.log("value reset");
  };
  return (
    <section className="my-11 min-h-screen">
      {/* main screen */}
      <div className="flex justify-center">
        <MainScreen title={`CREATE NEW NOTE`} />
      </div>
      {/* create note section */}
      <section className="flex justify-center mt-4">
        <form onSubmit={handleSubmit}>
          <div className="w-[500px] flex flex-col gap-5 bg-gray-100 p-3 rounded shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            {/* title div */}
            <div className="flex flex-col gap-1">
              <label htmlFor="title" className="font-semibold">
                Title
              </label>
              <input
                placeholder="Enter the title"
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="px-2 py-1 border rounded"
              />
            </div>
            {/* content div */}
            <div className="flex flex-col gap-1">
              <label htmlFor="content" className="font-semibold">
                Content
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Enter the content"
                name="content"
                id="content"
                className="px-2 py-1 border rounded"
              ></textarea>
            </div>
            {/* category div */}
            <div className="flex flex-col gap-1">
              <label htmlFor="category" className="font-semibold">
                Category
              </label>
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Enter the category"
                type="text"
                name="category"
                id="category"
                className="px-2 py-1 border rounded"
              />
            </div>
            {/* buttons div */}
            <div className="flex justify-center gap-12">
              <button
                type="submit"
                className="bg-green-400 px-2 py-1 rounded text-white hover:bg-green-500"
              >
                create
              </button>
              <button
                type="reset"
                className="bg-red-400 px-2 py-1 rounded text-white hover:bg-red-500"
                onClick={handleReset}
              >
                reset
              </button>
            </div>
          </div>
        </form>
      </section>
    </section>
  );
};

export default CreateNotePage;
