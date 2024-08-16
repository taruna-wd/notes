import React from "react";

function Eraser() {
  return (
    <div>
      <div className="">
        <button className="flex  " aria-label="Calligraphy Tool">
        <i className="fa-solid fa-eraser hover:border hover:bg-white  p-2 transition duration-700 ease-in-out"></i>
        <i className="fa-solid fa-caret-down hover:border p-2 transition duration-700 ease-in-out"></i>
         
        
        </button>
      </div>
    </div>
  );
}

export default Eraser;
