
import React from "react";
import Brush from "./Brush";
import { useDrawing } from "../../context/DrawingContext";

function Calligraphy() {
const {toggleOptions} = useDrawing()


  return (
    <div className="flex space-x-2">
      <div className="" onClick={toggleOptions}>
      <i className="fa-solid fa-pen-clip hover:border hover:bg-white duration-100 p-2"></i>

        <Brush/>


      </div>
    </div>
  );
}

export default Calligraphy;