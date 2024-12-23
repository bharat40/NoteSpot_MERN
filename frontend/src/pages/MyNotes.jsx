import React, { useEffect, useState } from "react";
import MainScreen from "../components/MainScreen/MainScreen";

import Cards from "../components/MyNotes/Cards.jsx";
import axios from "axios";

const MyNotes = () => {
  const [notes, setNotes] = useState([]);
  const fetchNotes = async () => {
    const data = await axios.get("http://localhost:5000/api/notes");

    setNotes(data.data);
  };
  useEffect(() => {
    fetchNotes();
  }, []);
  return (
    <div className="flex flex-col my-11 h-screen gap-5">
      <div className="flex justify-center">
        <MainScreen title={"Welcome back Bharat"} />
      </div>
      <div className="px-[260px]">
        <div className="flex items-center justify-between">
          <button className="bg-blue-400 h-[40px] hover:bg-blue-500 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded px-2 py-1 text-white font-medium">
            CREATE NEW NOTE
          </button>
          <img src="./mynotesimage.jpeg" alt="image" className="h-[70px]" />
        </div>

        <div className="flex flex-col gap-3 mt-7">
          {notes.map((n) => {
            return (
              <div key={n._id}>
                <Cards
                  title={n.title}
                  content={n.content}
                  category={n.category}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyNotes;
