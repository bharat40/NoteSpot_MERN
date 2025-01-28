import React, { useEffect, useState } from "react";
import MainScreen from "../components/MainScreen/MainScreen";
import Cards from "../components/MyNotes/Cards.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
  const handleDelete = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
    toast.success("Note Deleted Successful!");
  };
  const handleDeleteAll = async () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    await axios.delete("http://localhost:5000/api/notes", config);
    toast.success("All Notes Deleted Successful!");
  };
  const handleUpdate = (updatedNote) => {
    setNotes(
      notes.map((note) => (note._id === updatedNote._id ? updatedNote : note))
    );
  };
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUsername(userInfo.name);
    fetchNotes();
  }, [handleDelete]);

  const handleClick = () => {
    navigate("/createnote");
  };


  return (
    <div className="flex flex-col  my-11 h-screen gap-5">
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
                  id={n._id}
                  title={n.title}
                  content={n.content}
                  category={n.category}
                  date={n.createdAt.substring(0, 10)}
                  onDelete={handleDelete}
                  onUpdate={handleUpdate}
                />
              </div>
            );
          })}
        </div>
        {notes.length != 0 && (
          <button
            className="bg-red-500 hover:bg-red-600 px-2 py-1 rounded text-white mt-3"
            onClick={handleDeleteAll}
          >
            delete all
          </button>
        )}
      </div>
    </div>
  );
};

export default MyNotes;
