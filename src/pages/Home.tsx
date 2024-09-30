// import React from 'react'
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className=" pt-16">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold text-gray-800 text-center">
          This is the home page with <br /> Nested Routing
        </h1>
        <p className="mt-3 font-sans font-semibold text-gray-500 text-center">
          These Nested routes are wrapped in a parent route, in this case, Home.
          Then define the links on the page where you want <br /> them to appear.{" "}
          (The output of these links will appear on the same page.) 
          After defining the links, you create a place <br />for their content to
          appear in. 
          This is achieved using the <code>{"<Outlet/> "}</code> keyword. <br />
          <span className="underline">Note:</span>The content displayed is a
          page of its own.
        </p>
      </div>
      <div className="mt-9 flex space-x-10 justify-center">
        <Link
          to="/Linkone"
          className=" text-white w-[120px] text-center p-2 border-2  bg-gray-800 font-semibold rounded-full hover:bg-gray-500 duration-300 ease-in-out"
        >
          Link one
        </Link>
        
        <Link
          to="/Linktwo"
          className="bg-white text-black w-[120px] text-center p-2 border-2 border-gray-200 font-semibold rounded-full hover:bg-gray-200 duration-300"
        >
          Link two
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
