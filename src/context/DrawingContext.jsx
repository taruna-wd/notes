import React, { createContext, useState, useContext, useEffect, useRef } from 'react';

const DrawingContext = createContext();

export const DrawingProvider = ({ children }) => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState("#000000"); 
  const [isErasing, setIsErasing] = useState(false); // New state to track if eraser is active
  const [lineWidth, setLineWidth] = useState(7); // for brush size 
  const [showOptions, setShowOptions] = useState(false); // hide or show options for brush and color
  const [history, setHistory] = useState( JSON.parse(localStorage.getItem("history"))||[]);
  const [historyStep, setHistoryStep] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      ctx.lineWidth = lineWidth;
      ctx.lineCap = "round";
    }
  }, [ lineWidth]);

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = isErasing ? "#FFFFFF" : color; // Set color based on whether erasing or drawing

    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
  };

  const endDrawing = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
    saveHistory(); // Save canvas state when drawing ends
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const saveHistory = () => {
    const canvas = canvasRef.current;
    const dataUrl = canvas.toDataURL();
    console.log(history)

    const newHistory = [...history.slice(0, historyStep), dataUrl];
    setHistory(newHistory);
    console.log(newHistory)
    localStorage.setItem("history", JSON.stringify(history));

    setHistoryStep(newHistory.length);
  };

  const undo = () => {
    if (historyStep > 1) {
      const previousStep = historyStep - 1;
      setHistoryStep(previousStep);
      restoreCanvas(history[previousStep - 1]);
    }
  };

  const redo = () => {
    if (historyStep < history.length) {
      const nextStep = historyStep + 1;
      setHistoryStep(nextStep);
      restoreCanvas(history[nextStep - 1]);
    }
  };

  const restoreCanvas = (dataUrl) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = dataUrl;
    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
    };
  };
  const Eraser = () => {
    setIsErasing(!isErasing);
  };

  const downloadImage = () => {
    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.download = "drawing.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <DrawingContext.Provider value={{
      canvasRef, startDrawing, endDrawing, draw,
      setColor, setLineWidth, downloadImage, showOptions, toggleOptions,
      undo, redo, Eraser
    }}>
      {children}
    </DrawingContext.Provider>
  );
};

export const useDrawing = () => useContext(DrawingContext);
