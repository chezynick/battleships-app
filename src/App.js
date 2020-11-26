import React, { useEffect, useState, version } from 'react';
import './App.css';

//import components
import { Ship } from './components/Ship';
import GameBoard from './components/GameBoard';

import { BoardCreate } from './components/BoardCreate';
import Header from './components/Header';
import GameUpdate from './components/GameUpdate';
import BoatUpdate from './components/BoatUpdate';

function App() {
	//state values for players and board control
	const [board, setBoard] = useState(BoardCreate);
	const [board2, setBoard2] = useState(BoardCreate);
	const [display, setDisplay] = useState(true);
	const [playerTurn, setPlayerTurn] = useState(false);
	const [VrsComputer, setVrsComputer] = useState(false);
	const [computerTurn, setComputerTurn] = useState(false);
	//set boats for player 1 and add to array
	const ship1 = new Ship(3, 4, false, 1);
	const ship2 = new Ship(3, 45, true, 2);
	const ship3 = new Ship(5, 84, false, 3);
	const ship4 = new Ship(4, 26, true, 4);
	const [Player1, setPlayer1] = useState([ship1, ship2, ship3, ship4]);
	//set boats for player 2 and add to array
	const ship5 = new Ship(3, 23, false, 5);
	const ship6 = new Ship(3, 6, true, 6);
	const ship7 = new Ship(5, 56, false, 7);
	const ship8 = new Ship(4, 11, true, 8);
	const [Player2, setPlayer2] = useState([ship5, ship6, ship7, ship8]);
	//place ship function
	const shipPlacer = () => {
		setDisplay(false);
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
	const updateBoard = (result, set) => {
		set(result);
	};
	//click handler for computer controlled oponent
	const computerHandler = () => {
		setVrsComputer(true);
		setComputerTurn(true);
		shipPlacer();
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			setPlayerTurn(!playerTurn);
			setComputerTurn(true);
		}, 1500);
	}, [board2, board]);

	return (
		<div className="App">
			<Header />
			<div className="boats1">
				<BoatUpdate board={board2} player={Player2} playerTurn={playerTurn} />

				<div className="boardContainer">
					{playerTurn ? (
						<GameBoard
							board={board}
							player="Player 2"
							updateBoard={updateBoard}
							setBoard={setBoard}
							shipSunk={shipSunk}
							VrsComputer={VrsComputer}
							computerTurn={computerTurn}
							setComputerTurn={setComputerTurn}
						/>
					) : (
						<GameBoard
							board={board2}
							player="Player 1"
							updateBoard={updateBoard}
							setBoard={setBoard2}
							shipSunk={shipSunk}
							VrsComputer={VrsComputer}
							computerTurn={computerTurn}
							setComputerTurn={setComputerTurn}
						/>
					)}
				</div>

				<BoatUpdate board={board} player={Player1} playerTurn={playerTurn} />
			</div>
			<GameUpdate board={board} board2={board2} Player1={Player1} Player2={Player2} />
			{display ? (
				<div className="buttonHolder">
					<button onClick={computerHandler}>'BATTLE THE COMPUTER?'</button>
					<button onClick={shipPlacer}>'DESTROY A HUMAN!!'</button>
				</div>
			) : (
				''
			)}
		</div>
	);
}

export default App;
