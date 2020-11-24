import React, { useEffect, useState } from 'react';
import './App.css';

//import components
import { Ship } from './components/Ship';
import GameBoard from './components/GameBoard';
import GameBoard2 from './components/GameBoard2';
import { BoardCreate } from './components/BoardCreate';
import Header from './components/Header';
import GameUpdate from './components/GameUpdate';

function App() {
	//state values for players and board control
	const [board, setBoard] = useState(BoardCreate);
	const [board2, setBoard2] = useState(BoardCreate);
	const [display, setDisplay] = useState(false);
	const [playerTurn, setPlayerTurn] = useState(false);
	//set boats for player 1 and add to array
	const ship1 = new Ship(3, 4, false, 1);
	const ship2 = new Ship(3, 45, true, 2);
	const ship3 = new Ship(5, 32, false, 3);
	const ship4 = new Ship(4, 26, true, 4);
	const Player1 = [ship1, ship2, ship3, ship4];
	//set boats for player 2 and add to array
	const ship5 = new Ship(3, 92, false, 5);
	const ship6 = new Ship(3, 1, true, 6);
	const ship7 = new Ship(5, 84, false, 7);
	const ship8 = new Ship(4, 45, true, 8);
	const Player2 = [ship5, ship6, ship7, ship8];
	//place ship function
	const shipPlacer = () => {
		setDisplay(true);
		Player1.forEach((a) => {
			for (let i = a.position; i < a.position + a.boat.length; i++) {
				board[i].containsShip = a.name;
			}
			setBoard([...board]);
		});
		Player2.forEach((a) => {
			for (let i = a.position; i < a.position + a.boat.length; i++) {
				board2[i].containsShip = a.name;
			}
			setBoard2([...board2]);
		});
	};
	//has the ship sunk function caller
	const shipSunk = (a, b) => {
		let ship = eval('ship' + a);
		ship.isSunk(b);
	};

	//hit and miss updater
	const updateBoard = (result) => {
		setBoard(result);
	};
	const updateBoard2 = (result) => {
		setBoard2(result);
	};
	useEffect(() => {
		const timer = setTimeout(() => {
			setPlayerTurn(!playerTurn);
		}, 2000);
	}, [board2, board]);

	return (
		<div className="App">
			<Header />
			<div className="boardContainer">
				{playerTurn ? (
					<GameBoard board={board} updateBoard={updateBoard} shipSunk={shipSunk} />
				) : (
					<GameBoard2 board2={board2} updateBoard2={updateBoard2} shipSunk={shipSunk} />
				)}
			</div>
			<GameUpdate board={board} board2={board2} />
			<button onClick={shipPlacer}>{display ? 'Start Again' : 'Launch your flotilla'}</button>
		</div>
	);
}

export default App;
