
import React from 'react'
import Eraser from './Eraser'
import Calligraphy from './Calligraphy'
import { useNavigate } from 'react-router-dom';

function leftTools() {
  const navigate = useNavigate();


  const backBtn = ()=>{
     navigate("/notes")
  }
  return (
    <div className="flex gap-2 justify-center items-center 1/4 ">
      <div className='p-1 px-2 border cursor-pointer '>
         <i className="fa-solid fa-arrow-left" onClick={backBtn}></i></div>
        <Eraser/>
        <Calligraphy/>
    </div>
  )
}

export default leftTools