
import React from "react";
import { useDrawing } from "../../context/DrawingContext";

function Eraser() {
  const { canvasRef } = useDrawing();

  const handleClear = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  return (
    <button onClick={handleClear}>
      <i className="fa-solid fa-eraser hover:border hover:bg-white p-2 transition duration-700 ease-in-out"></i>
    </button>
  );
}

export default Eraser;