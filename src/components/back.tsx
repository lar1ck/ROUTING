// import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";


const Back = () => {
    const history = useNavigate();
    const backi = () => {
        history(-1);
    }
  return (
    <div><button onClick={backi} className=' text-gray-700 text-3xl p-1 px-3 '><IoArrowBack /></button></div>
  )
}

export default Back