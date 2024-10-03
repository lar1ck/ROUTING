// import React from 'react'
import "./contact.css";
import { GoArrowRight } from "react-icons/go";

const Contact = () => {
  return (
    <div className="ctimg justify-between flex">
      <div className="pl-20 mt-28 w-[30%] h-[350px]">
        <h1 className="font-bold font-sans text-3xl ">
          GET IN TOUCH WITH OUR TEAM
        </h1>
        <p className="font-semibold text-gray-600 mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis vel
          rem eum, tempora ab voluptatibus repellat culpa dolorum rerum.
        </p>
        <button className="bg-black rounded-lg text-white font-semibold p-2 px-4 hover:bg-slate-800 flex justify-center items-center mt-4  hover:scale-x-105 duration-300">
          Get in touch <GoArrowRight className="ml-2" />
        </button>
      </div>
      <div className="mr-14 mt-24 w-[30%] border border-gray-400 p-4 pt-5 rounded-lg ">
        <h1 className="font-bold font-sans text-2xl">LEAVE A SUGGESTION</h1>
        <div className="">
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            className="font-semibold p-2 border rounded-md mt-3 outline-none"
          />{" "}
          <br />
          <textarea
            name=""
            rows={6}
            className="mt-3 outline-none p-2 border rounded-md w-5/6 font-semibold"
            placeholder="Comment "
          ></textarea>
          <button className="bg-black rounded-lg text-white font-semibold p-2 px-5 hover:bg-slate-800 flex justify-center items-center mt-4">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
