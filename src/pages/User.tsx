// import React from 'react'
// import Prf from "../assets/userprf.png";
import "./user.css";

interface userProps {
  email?: string,
  phone?: number,
  adress?: number,
  bio?: string,
  userInfo?:object
}

const User: React.FC<userProps> = ({
  phone = "07xxxxxxx",
  adress = "KG 123 st, Kigali , RWANDA",
  bio = "LoremipsumLoremipsumLorem LoremipsumLoremipsumLoremLoremipsumLoremipsumLorem LoremipsumLoremipsumLoremLoremipsumLoremipsumLorem"
}) => {
  const  userInfo  = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="px-24 pt-10 flex space-x-4 img h-screen ">
      <div>
        <div className="pro ml-32 border-4 border-white">
          {/* <img src={Prf} alt="" className="rounded-full" /> */}
        </div>
        <div className="h-[300px] w-[400px] bg-gradient-to-r from-slate-200 to-slate-50 border-8 border-white text-xl rounded-xl space-y-6 -mt-8 px-6 flex flex-col justify-center">
          <span className="flex">
            <p className="font-semibold">Username  :</p>
            <p className="mx-1">{userInfo.username? `${userInfo.username}`: "Unknown"}</p>
          </span>
          <span className="flex">
            <p className="font-semibold">Email :</p>
            <p className="mx-1">{userInfo.email? `${userInfo.email}`: "example@email.com"}</p>
          </span>
          <span className="flex">
            <p className="font-semibold">Phone :</p>
            <p className="mx-1">{phone}</p>
          </span>
          <span className="flex">
            <p className="font-semibold">Address :</p>
            <p className="mx-1">{adress}</p>
          </span>
        </div>
      </div>
      <div className="border-2 max-w-[800px] border-gray rounded-xl w-full h-[300px] p-10 bottom-0 mt-32 flex flex-col justify-center backdrop-blur-md text-xl font-sans">
        {bio}
      </div>
    </div>
  );
};

export default User;
