
import React, { useState } from "react";
import Color from "./Color";
import Brush from "./Brush";

function Calligraphy() {
  const [showColors, setShowColors] = useState(false);
  const [showSizes, setShowSizes] = useState(false);


  return (
    <div className="flex space-x-2">
      <div className="">
        <button onClick={() => setShowColors(!showColors)}>
          <i className="fa-solid fa-pen-clip hover:border hover:bg-white duration-100 p-2"></i>
        </button>
        {showColors &&  (
            <Color/>
         )} 
      </div>
      <div className="relative">
        <button onClick={() => setShowSizes(!showSizes)}>
          <i className="fa-solid fa-sliders-h hover:border hover:bg-white duration-100 p-2"></i>
        </button>
        {showSizes && (
          <div className="absolute flex space-x-2 mt-2  border p-2">
              <Brush/>
          </div>
         )}
      </div>
    </div>
  );
}

export default Calligraphy;