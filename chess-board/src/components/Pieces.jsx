import React from "react";

// Render pieces based on board positions
export const renderPieces = (row, col) => {
  const pieceMap = {
    "0-1": "♞", // Horse (Knight)
    "0-3": "♛", // Queen
    "0-4": "♚", // King
    "7-1": "♞", // Horse (Knight)
    "7-3": "♛", // Queen
    "7-4": "♚", // King
  };

  const position = `${row}-${col}`;
  const piece = pieceMap[position];

  return piece ? <span className="piece">{piece}</span> : null;
};
