import React, { useState, useRef, useEffect } from 'react';

const Tools = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('black');
  const [lineWidth, setLineWidth] = useState(5);
  const [undoStack, setUndoStack] = useState([]);
  const [redoStack, setRedoStack] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
  }, [color, lineWidth]);

  const handleMouseDown = (e) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  const handleMouseMove = (e) => {
    if (isDrawing) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      ctx.stroke();
    }
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.closePath();
    const dataURL = canvas.toDataURL();
    setUndoStack([...undoStack, dataURL]);
    setRedoStack([]);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleLineWidthChange = (e) => {
    setLineWidth(parseInt(e.target.value, 10));
  };

  const handleUndo = () => {
    if (undoStack.length > 0) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const previousDataURL = undoStack[undoStack.length - 1];
      const image = new Image();
      image.onload = () => {
        ctx.drawImage(image, 0, 0);
      };
      image.src = previousDataURL;
      setUndoStack(undoStack.slice(0, -1));
      setRedoStack([...redoStack, previousDataURL]);
    }
  };

  const handleRedo = () => {
    if (redoStack.length > 0) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const nextDataURL = redoStack[redoStack.length - 1];
      const image = new Image();
      image.onload = () => {
        ctx.drawImage(image, 0, 0);
      };
      image.src = nextDataURL;
      setRedoStack(redoStack.slice(0, -1));
      setUndoStack([...undoStack, nextDataURL]);
    }
  };

  const handleClear = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setUndoStack([]);
    setRedoStack([]);
  };

  return (
    <div className='w-full h-5'> 
      <canvas
        ref={canvasRef}
       
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseOut={handleMouseUp}
        className='w-3/5 bg-white'
      />
      <div>
        <label htmlFor="color">Color:</label>
        <input
          type="color"
          id="color"
          value={color}
          onChange={handleColorChange}
        />
      </div>
      <div>
        <label htmlFor="lineWidth">Line Width:</label>
        <input
          type="number"
          id="lineWidth"
          value={lineWidth}
          onChange={handleLineWidthChange}
        />
      </div>
      <button onClick={handleUndo}>Undo</button>
      <button onClick={handleRedo}>Redo</button>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
};

export default Tools;