import React, { createContext, useState, useContext, useEffect, useRef } from 'react';

const DrawingContext = createContext();

export const DrawingProvider = ({ children }) => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState("#000000");
  const [lineWidth, setLineWidth] = useState(7);
  const [lineOpacity, setLineOpacity] = useState(1);  // Changed to 1 for full opacity

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx.strokeStyle = color;
      canvas.width = 
      console.log(color)
      ctx.lineWidth = lineWidth;
      ctx.globalAlpha = lineOpacity;
      ctx.lineCap = "round";
    }
  }, [color, lineWidth, lineOpacity]);
  const startDrawing = (e) => {
    console.log("Starting drawing...");
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);
  };
  
  const draw = (e) => {
    if (!isDrawing) return;
    console.log("Drawing...");
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
  };
  
  const endDrawing = () => {
    console.log("Ending drawing...");
    setIsDrawing(false);
  };
  

  return (
    <DrawingContext.Provider value={{ canvasRef, startDrawing, endDrawing, draw, setColor, setLineWidth }}>
      {children}
    </DrawingContext.Provider>
  );
};

export const useDrawing = () => useContext(DrawingContext);
