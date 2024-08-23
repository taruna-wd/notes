import React from "react";
import { useDrawing } from "../../context/DrawingContext";
import LeftTools from "./LeftTools";
import RightTools from "./RightTools";


function Tools() {
  const { canvasRef, startDrawing, endDrawing, draw} = useDrawing();


  return (
    <div className=" top-0 bg-white text-gray-950  flex flex-col w-full">
      <div className="flex justify-between px-2  bg-white w-full h-12 border-b ">
        <LeftTools />
        <RightTools />
      </div>
      <canvas
        className="border w-full h-screen "
        height={window.innerHeight}
        width={window.innerWidth}
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseMove={draw}
      />
      
    </div>
  );
}

export default Tools;
