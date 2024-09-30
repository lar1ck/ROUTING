// import React from 'react'

const Linktwo = () => {
  return (
    <div className="flex my-10 justify-center rounded-2xl">
      <div className="py-9 px-10 flex bg-gray-300 ">
        <div className="w-[500px] h-auto ">
          <h1 className="text-xl pl-16 font-bold text-gray-900 ">Link two</h1>
          <p className="mt-2 font-mono text-lg font-semibold text-gray-800 ">
            This also works as the one before : <br /> it is displayed
            as a page through an outlet. Ensuring seemless
            transitions on pages.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Linktwo;
