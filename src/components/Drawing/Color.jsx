import React from "react";
import { useDrawing } from "../../context/DrawingContext";

const Color = () => {
  const { setColor } = useDrawing();
  const colorOptions = ["#070707", "#dc390c", "#f4f70f", "#4ef70f", "#0beeb9", "#840bee"];

  return (
    <div className="absolute flex gap-1 top-1/5 border p-2 mt-2">
      {colorOptions.map((col) => (
        <button
          key={col}
          style={{ backgroundColor: col }}
          className="rounded-full p-2 aboslute"
          onClick={() => setColor(col)}
        >
          {/* Empty button for color selection */}
        </button>
      ))}
    </div>
  );
};

export default Color;
