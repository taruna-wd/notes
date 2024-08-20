import { Link } from "@mui/material";
import React, { useState } from "react";
import { useDrawing } from "../../context/DrawingContext";


function Tools() {
  const [disabled, setDisabled] = useState(false);
  const [ischecked, setIsChecked] = useState(false); // for screen

  const { canvasRef,undo,downloadImage ,redo } = useDrawing();

  const handleClear = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    setDisabled(false)
  };
  return (
    <div className="w-1/4">
      <div className="flex  justify-between items-center w-2/3 my-1 ">
        <div className="hover:border hover:bg-white p-2 transition duration-700 ease-in-out  " onClick={undo}>
          <i className="fa-solid fa-reply"></i>
        </div>
        <div className="hover:border hover:bg-white p-2 transition duration-700 ease-in-out" onClick={redo}>
          <i className="fa-solid fa-share"></i>
        </div>
        <div
          className="hover:border hover:bg-white p-2 transition duration-700 ease-in-out"
          onClick={() => setIsChecked(!ischecked)}
        >
          {ischecked ? (
            <i className="fa-solid fa-expand"></i>
          ) : (
            <i className="fa-solid fa-compress"></i>
          )}
        </div>
        <div className="hover:border hover:bg-white p-2 transition duration-700 ease-in-out">
          <i
            className="fa-solid fa-ellipsis-vertical cursor-pointer"
            onClick={() => setDisabled(!disabled)}
          ></i>

          {disabled && (
            <div className="p-2  absolute right-0 mt-2">
              <div class="w-40 text-sm font-medium text-white bg-black border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li
                onClick={downloadImage}
                  className="block w-full px-4 py-2 text-white bg-gray-700 border-b border-gray-200 rounded-t-lg cursor-pointer dark:bg-gray-800 dark:border-gray-600"
                >
                  Export as image
                </li>
                <li
                  onClick={handleClear}

                  className="block w-full px-4 py-2 text-white bg-gray-700 border-b border-gray-200 rounded-b-lg cursor-pointer dark:bg-gray-800 dark:border-gray-600"
                >
                   Delete current image
                </li>
                
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Tools;
