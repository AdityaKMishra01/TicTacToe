import React from 'react';
import './Board.css';

function Board({ board, handleClick }) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="box box1" onClick={() => handleClick(0)}>
            {board[0] && <img src={board[0] === 'X' ? '10810331.png' : 'zero.png'} alt={board[0]} />}
          </div>
          <div className="box box2" onClick={() => handleClick(1)}>
            {board[1] && <img src={board[1] === 'X' ? '10810331.png' : 'zero.png'} alt={board[1]} />}
          </div>
          <div className="box box3" onClick={() => handleClick(2)}>
            {board[2] && <img src={board[2] === 'X' ? '10810331.png' : 'zero.png'} alt={board[2]} />}
          </div>
        </div>
        <div className="row">
          <div className="box box4" onClick={() => handleClick(3)}>
            {board[3] && <img src={board[3] === 'X' ? '10810331.png' : 'zero.png'} alt={board[3]} />}
          </div>
          <div className="box box5" onClick={() => handleClick(4)}>
            {board[4] && <img src={board[4] === 'X' ? '10810331.png' : 'zero.png'} alt={board[4]} />}
          </div>
          <div className="box box6" onClick={() => handleClick(5)}>
            {board[5] && <img src={board[5] === 'X' ? '10810331.png' : 'zero.png'} alt={board[5]} />}
          </div>
        </div>
        <div className="row">
          <div className="box box7" onClick={() => handleClick(6)}>
            {board[6] && <img src={board[6] === 'X' ? '10810331.png' : 'zero.png'} alt={board[6]} />}
          </div>
          <div className="box box8" onClick={() => handleClick(7)}>
            {board[7] && <img src={board[7] === 'X' ? '10810331.png' : 'zero.png'} alt={board[7]} />}
          </div>
          <div className="box box9" onClick={() => handleClick(8)}>
            {board[8] && <img src={board[8] === 'X' ? '10810331.png' : 'zero.png'} alt={board[8]} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Board;
