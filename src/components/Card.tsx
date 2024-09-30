import React from "react";
import { GoArrowRight } from "react-icons/go";

interface CardProps {
  title?: string;
  content?: string;
  classNametit?: string;
  classNamediv?: string;
  btcontent?: string;
  classNamecont?: string;
  classNamebtn?: string;
}

const Card: React.FC<CardProps> = ({
  title = "This is a card",
  classNamediv = "mt-16 bg-slate-50 rounded-lg w-[400px] h-auto p-4 selection:bg-zinc-600 selection:text-white hover:bg-gray-600 hover:text-gray-50 hover:duration-300 duration-300 group",
  classNametit = "font-semibold text-gray-700 group-hover:text-white",
  classNamecont = "mt-3 text-gray-500 group-hover:text-gray-300",
  classNamebtn = "mt-2 flex items-center mt-2 bg-gray-200 p-1 rounded-lg px-2 group-hover:text-gray-700",
  content = "This is a card content",
  btcontent = "This is a button content",
}) => {
  return (
    <div className={classNamediv}>
      <h2 className={classNametit}>{title}</h2>
      <p className={classNamecont}>{content}</p>
      <button className={classNamebtn}>{btcontent} <GoArrowRight className="ml-2"/></button>
    </div>
  );
};

export default Card;
