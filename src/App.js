import React from "react"
import './App.css';
import Square from "./Square"
import Instructions from "./instructions"

function App() {
  const [squares, setSquares] = React.useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = React.useState(true);
  function handleChange(i){
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    if (squares[i]) {
      return;
    }
    const nextSquares = squares.slice()
    xIsNext ? nextSquares[i]= "x" : nextSquares[i] ="o"
    setSquares(nextSquares)
    setXIsNext(!xIsNext)
  }

  //this function is a general function and it is not related to any state or component in any way
  function calculateWinner(squares){
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
      const [a, b ,c] = lines[i]
      if (squares[a] && (squares[a] === squares[b]) && squares[a] === squares[c]) {
        return squares[a]
      } 
    }
    return null;
  }

const winner = calculateWinner(squares);
let status;
let next = xIsNext ? "x" : "o"
if (winner) {
  status = 'Winner: ' + winner
} else if ((winner !== "o" || winner !== "x")){

}else { 
  status = 'Next player: ' + next
}

  return (
    <div className="App">
      <header className="App-header">
        <img src="tic-tac-toe.png" className="App-logo" alt="logo" />
        <p>
          Let us play the <code>tic-tac-toe</code> game
        </p>
      </header>
      <h1>{status}</h1>
      <div>
        <Square value={squares[0]} onSquareClick={() => handleChange(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleChange(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleChange(2)}/>
      </div>
      <div>
        <Square value={squares[3]} onSquareClick={() => handleChange(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleChange(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleChange(5)}/>
      </div>
      <div>
        <Square value={squares[6]} onSquareClick={() => handleChange(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleChange(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleChange(8)}/>
      </div>
      <div>
        <Instructions 
        />
      </div>
      
    </div>
  );
}

export default App;
