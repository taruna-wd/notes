import React, { useState } from "react";
import { useDrawing } from "../../context/DrawingContext";

const Brush = () => {
  const { setColor, setLineWidth } = useDrawing();
  const [showOptions, setShowOptions] = useState(false);

  const colorOptions = ["#070707", "#dc390c", "#f4f70f", "#4ef70f", "#0beeb9", "#840bee"];
  const sizeOptions = [5, 10, 15, 20]; // Different brush sizes

  const handleColorSelect = (color) => {
    setColor(color);
    setShowOptions(false); // Hide options after selection
  };

  const handleSizeSelect = (size) => {
    setLineWidth(size);
    setShowOptions(false); // Hide options after selection
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="relative">
      <div
        className="flex cursor-pointer"
        aria-label="Brush Tool"
        onClick={toggleOptions}
      >
      
      {showOptions && (
        <div className="absolute flex flex-col gap-2 mt-2 p-2 border bg-white z-10">
          <div className="flex gap-1">
            {colorOptions.map((color) => (
              <button
                key={color}
                style={{ backgroundColor: color }}
                className="rounded-full p-2"
                onClick={() => handleColorSelect(color)}
              />
            ))}
          </div>
          <div className="flex gap-1 mt-2">
            {sizeOptions.map((size) => (
              <button
                key={size}
                className="rounded-full p-2 border"
                onClick={() => handleSizeSelect(size)}
                style={{ width: size + 10, height: size + 10 }} // Circle size indicates brush size
              >
              </button>
            ))}
          </div>
        </div>
        
      )}
            </div>

    </div>
  );
};

export default Brush;
