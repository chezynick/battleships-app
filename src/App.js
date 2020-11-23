import React, { useState } from "react";
import "./App.css";

//import components
import { Ship } from "./components/Ship";
import GameBoard from "./components/GameBoard";
import { BoardCreate } from "./components/BoardCreate";

function App() {
  //state values for players and board control
  const [board, setBoard] = useState(BoardCreate);

  const shippy = new Ship(3, 4, false);
  const ship2 = new Ship(3, 48, true);
  
  //place ship function
  const shipPlacer = () => {
    
  
    for(let i = ship2.position;i<(ship2.position
  +ship2.boat.length);i++){
    board[i].containsShip = true
    console.log(board[i])
    }
  
  }
  
  ship2.isHit(0);
  //hit and miss updater
  const updateBoard = (result) => {
    setBoard(result)
  }

  return (
    <div className="App">
      <GameBoard board={board} updateBoard={updateBoard} />
     <button onClick={ shipPlacer }>place ships</button>
    </div>
  );
}

export default App;
