import React, { useEffect, useState } from "react";
import MainScreen from "../components/MainScreen/MainScreen";
import Cards from "../components/MyNotes/Cards.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MyNotes = () => {
  const [notes, setNotes] = useState([]);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const fetchNotes = async () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get("http://localhost:5000/api/notes", config);
    setNotes(data);
  };
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUsername(userInfo.name);
    fetchNotes();
  }, []);

  const handleClick = () => {
    navigate("/createnote");
  };
  return (
    <div className="flex flex-col my-11 h-screen gap-5">
      <div className="flex justify-center">
        <MainScreen title={`WELCOME BACK ${username || "USER"}`} />
      </div>
      <div className="px-[260px]">
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-400 h-[40px] hover:bg-blue-500  rounded px-2 py-1 text-white font-medium"
            onClick={handleClick}
          >
            Create new note
          </button>
          <img src="./mynotesimage.jpeg" alt="image" className="h-[70px]" />
        </div>

        <div className="flex flex-col gap-4 mt-7">
          {notes.map((n) => {
            return (
              <div key={n._id}>
                <Cards
                  title={n.title}
                  content={n.content}
                  category={n.category}
                  date={n.createdAt.substring(0, 10)}
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
