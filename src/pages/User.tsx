// import React from 'react'
import { useParams } from "react-router-dom";
// import Prf from "../assets/userprf.png";
import "./user.css";

const User = () => {
  const { name } = useParams();

  
  return (
    <div className="px-24 pt-10 flex space-x-4 img h-screen ">
      <div>
        <div className="pro ml-32 border-4 border-white">
          {/* <img src={Prf} alt="" className="rounded-full" /> */}
        </div>
        <div className="h-[300px] w-[400px] bg-gradient-to-r from-slate-200 to-slate-50 border-8 border-white text-xl rounded-xl space-y-6 -mt-8 px-6 flex flex-col justify-center">
          <span className="flex">
            <p className="font-semibold">Username :</p>
            {name}
          </span>
          <span className="flex">
            <p className="font-semibold">Email :</p>Email@gmail.com
          </span>
          <span className="flex">
            <p className="font-semibold">Phone :</p>1234567890
          </span>
          <span className="flex">
            <p className="font-semibold">Address :</p>Kigali,Rwanda
          </span>
        </div>
      </div>
      <div className="border-2 border-white rounded-xl w-full h-[300px] p-10 bottom-0 mt-32 flex flex-col justify-center backdrop-blur-md text-xl font-sans">
        In real life the actual URL would carry the whole inforamtion of the
        target item, or carry an id which will require a backend lgic to fetch
        the corresponding data for the id (standard), and the data would
        populate the missing info.
      </div>
    </div>
  );
};

export default User;
