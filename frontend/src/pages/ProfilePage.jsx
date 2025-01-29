import React, { useEffect, useState } from "react";
import MainScreen from "../components/MainScreen/MainScreen";

const ProfilePage = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [pic, setPic] = useState("");
  const userData = () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setPic(userInfo.picture);
    setName(userInfo.name);
    setMail(userInfo.email);
  };
  useEffect(() => {
    userData();
  });
  return (
    <section className="flex flex-col items-center h-screen w-full">
      <MainScreen title="Profile Page" />
      <div className=" flex justify-center mt-36 border p-7 rounded bg-indigo-200">
        <div className="flex flex-col items-center gap-4">
          <img src={pic} alt="user-profile-pic" className="w-32 rounded-lg" />
          <p className="font-bold text-2xl text-slate-700">Name {name}</p>
          <p className="font-bold text-2xl text-slate-700">Email {mail}</p>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
