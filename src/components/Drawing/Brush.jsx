import React, { useState } from "react";
import { useDrawing } from "../../context/DrawingContext";

const Brush = () => {
  const { setColor, setLineWidth ,showOptions } = useDrawing();

  const colorOptions = ["#070707", "#dc390c", "#f4f70f", "#4ef70f", "#0beeb9", "#840bee"];  // Different color options
  const sizeOptions = [5, 10, 15, 20]; // Different brush sizes


  return (
    <div className="relative" >
      {showOptions && (
        <div className="absolute flex flex-col gap-2 mt-2 p-2 border bg-white z-10">
          <div className="flex gap-1">
            {colorOptions.map((color) => (              
              <button
                key={color}
                style={{ backgroundColor: color }}
                className="rounded-full p-2"
                onClick={() => {if(color) return setColor(color)} }
              />
            ))}
          </div>
          <div className="flex gap-1 mt-2">
            {sizeOptions.map((size) => (
              <button
                key={size}
                className="rounded-full p-2 border"
                onClick={() => {if(size) return setLineWidth(size)}}
                style={{ width: size + 10, height: size + 10 }} // Circle size indicates brush size
              >
              </button>
            ))}
          </div>
        </div>
        
      )}
    </div>

  
  );
};

export default Brush;
