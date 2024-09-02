import React from 'react';
import Eraser from './Eraser';
import Calligraphy from './Calligraphy';
import { useNavigate } from 'react-router-dom';
import { useDrawing } from "../../context/DrawingContext";
import { useNotes } from "../../context/NotesContext";

function LeftTools() {
  const navigate = useNavigate();
  const { history, setHistory, canvasRef } = useDrawing();
  const { addNotes } = useNotes();

  const backBtn = () => {
    // Convert the drawing on the canvas to an image or some data representation
    const canvas = canvasRef.current;
    const imageData = canvas.toDataURL("image/png"); // This saves the drawing as a base64 PNG

    
    setHistory(imageData)
    console.log(history)
    // Navigate back to the notes page
    navigate("/notes");
  };

  return (
    <div className="flex gap-2 justify-center items-center 1/4">
      <div className='p-1 px-2 border cursor-pointer'>
        <i className="fa-solid fa-arrow-left" onClick={backBtn}></i>
      </div>
      <Eraser />
      <Calligraphy />
    </div>
  );
}

export default LeftTools;
