import React from "react";
import Square from "./Square";
import { renderPieces } from "./Pieces";

const ChessBoard = () => {
  const rows = 8;
  const cols = 8;

  const renderBoard = () => {
    const board = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const isBlack = (row + col) % 2 === 1;

        // Place pieces on specific positions
        const piece = renderPieces(row, col);

        board.push(
          <Square key={`${row}-${col}`} isBlack={isBlack}>
            {piece}
          </Square>
        );
      }
    }
    return board;
  };

  return <div className="board">{renderBoard()}</div>;
};

export default ChessBoard;
