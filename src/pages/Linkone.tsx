// import React from 'react'

const Linkone = () => {
  return (
    <div className="flex my-10 justify-center rounded-2xl">
      <div className="py-9 px-10 flex bg-gray-700 ">
        <div className="w-[500px] h-auto ">
          <h1 className="text-xl pl-16 font-bold text-gray-100 ">Link one</h1>
          <p className="mt-2 font-mono text-lg font-semibold text-gray-200 ">
            This content is being displayed like a page via <br /> the outlet
            component. It eases navigation on the user-side through seemless
            transitions on pages.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Linkone;
