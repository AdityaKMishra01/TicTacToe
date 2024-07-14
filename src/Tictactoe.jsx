import React, { useState } from "react";
import Board from "./Board";
import "./Tictactoe.css";

function Tictactoe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [count, setCount] = useState(0);
  const [winner, setWinner] = useState(null);

  const handleChange = (index) => {
    if (board[index] || winner) return; // Ignore if box is already filled or there's a winner

    const newBoard = [...board];
    newBoard[index] = count % 2 === 0 ? 'X' : 'O';
    setBoard(newBoard);
    setCount(count + 1);

    checkWinner(newBoard);
  };

  const checkWinner = (board) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return;
      }
    }
  };

  return (
    <>
      <div className="gameContainer">
        <img src="Tic-Tac-Toe-Game.gif" alt="image" />
        <h3>{winner ? `Winner: ${winner}` : "0"}</h3>
        <Board board={board} handleClick={handleChange} />
      </div>
    </>
  );
}

export default Tictactoe;
