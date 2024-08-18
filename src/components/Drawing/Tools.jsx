import React from "react";
import { useDrawing } from "../../context/DrawingContext";
import LeftTools from "./LeftTools";
import RightTools from "./RightTools";


function Tools() {
  const { canvasRef, startDrawing, endDrawing, draw } = useDrawing();

  return (
    <div className=" top-0 bg-white text-gray-950 w-full h-full flex flex-col">
      <div className="flex justify-between px-2  bg-white w-full h-12 border-b">
        <LeftTools />
        <RightTools />
      </div>
      <div className=" border m-3 h-full">
      <canvas
        className="border w-full h-3/4 bg-white"
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseMove={draw}
      />
      </div>
      
    </div>
  );
}

export default Tools;
