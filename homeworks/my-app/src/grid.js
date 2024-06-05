import React, { useState, useRef } from 'react';
import './grid.css'; // For styling

const Grid = ({ size }) => {
  const [selected, setSelected] = useState([]);
  const startRef = useRef(null);

  const handleMouseDown = (row, col) => {
    startRef.current = { row, col };
  };

  const handleMouseUp = (row, col) => {
    const start = startRef.current;
    if (start) {
      const selectedElements = [];
      const startRow = Math.min(start.row, row);
      const endRow = Math.max(start.row, row);
      const startCol = Math.min(start.col, col);
      const endCol = Math.max(start.col, col);

      for (let r = startRow; r <= endRow; r++) {
        for (let c = startCol; c <= endCol; c++) {
          selectedElements.push({ row: r, col: c });
        }
      }

      setSelected(selectedElements);
      startRef.current = null;
    }
  };

  return (
    <div className="grid">
      {Array.from({ length: size }).map((_, row) => (
        <div key={row} className="row">
          {Array.from({ length: size }).map((_, col) => (
            <div
              key={col}
              className={`cell ${selected.some(
                (e) => e.row === row && e.col === col
              ) ? 'selected' : ''}`}
              onMouseDown={() => handleMouseDown(row, col)}
              onMouseUp={() => handleMouseUp(row, col)}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
