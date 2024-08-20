
import React from "react";
import { useDrawing } from "../../context/DrawingContext";

function Eraser() {
  const { canvasRef ,  Eraser } = useDrawing();



  return (
    <button onClick={Eraser}>
      <i className="fa-solid fa-eraser hover:border hover:bg-white p-2 transition duration-700 ease-in-out"></i>
    </button>
  );
}

export default Eraser;