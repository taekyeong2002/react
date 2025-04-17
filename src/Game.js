import { useState } from "react";
import Square from "./Square";

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares){
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }
  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
    </div>
    <div className="game-info">
       <ol>{moves}</ol>
    </div>
    </div>
  )

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <squares value={squares[0]} onSquareClick={() => handleClick(0)} />
        <squares value={squares[1]} onSquareClick={() => handleClick(1)} />
        <squares value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <squares value={squares[3]} onSquareClick={() => handleClick(3)} />
        <squares value={squares[4]} onSquareClick={() => handleClick(4)} />
        <squares value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <squares value={squares[6]} onSquareClick={() => handleClick(6)} />
        <squares value={squares[7]} onSquareClick={() => handleClick(7)} />
        <squares value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
