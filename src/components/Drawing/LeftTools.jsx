import React from 'react';
import Eraser from './Eraser';
import Calligraphy from './Calligraphy';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDrawing } from "../../context/DrawingContext";
import { useNotes } from "../../context/NotesContext";
import { v4 as uuidv4 } from "uuid";
import { useState } from 'react';

function LeftTools() {
  const navigate = useNavigate();
  const {  setHistory, canvasRef  ,restoreCanvas} = useDrawing();
  const { savedNotes, setSavedNotes, updateNote , openMenuId ,setOpenMenuId } = useNotes();
  const location = useLocation();
  const [savedImages, setSavedImages] = useState([]);

    // Extract the noteId from the URL
  const noteId = location.pathname.split("/")[2];


  const handleSave = (id ) => {
    const canvas = canvasRef.current;
    const imageData = canvas.toDataURL('image/png');
       // Update the specific note with the drawing image
    updateNote(noteId, { data: imageData });

    navigate("/notes");

  };


  return (
    <div className="flex gap-2 justify-center items-center 1/4">
      <div className='p-1 px-2 border cursor-pointer'>
        <i className="fa-solid fa-arrow-left" onClick={handleSave}></i>
      </div>
      <Eraser />
      <Calligraphy />
    </div>
  );
}

export default LeftTools;
