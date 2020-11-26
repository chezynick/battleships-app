import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faFireAlt, faWater } from '@fortawesome/free-solid-svg-icons';
const GameBoard = ({ board, updateBoard, player, shipSunk, setBoard, VrsComputer, setComputerTurn, computerTurn }) => {
	const clickHandler = (square) => {
		board.forEach((a) => {
			setComputerTurn(false);
			if (a.key === square) {
				if (a.containsShip) {
					a.hit = true;
					//function to work out how many times this ship has been hit
					const hitLength = board.filter((ship) => ship.containsShip === a.containsShip && ship.hit === true);
					//calls func with ship name and amount of hits from above
					shipSunk(a.containsShip, hitLength.length);
				} else {
					a.missed = true;
				}
			}
		});

		updateBoard([...board], setBoard);
	};

	useEffect(() => {
		if (computerTurn === true && VrsComputer === true && player === 'Player 2') {
			getRandomInt(0, 100);
		}
	}, [{ board }]);

	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		const guess = Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
		console.log(guess);
		if (board[guess].hit === true || board[guess].missed === true) {
			getRandomInt(0, 100);
		} else {
			clickHandler(guess);
		}
	}
	return (
		<div>
			<div className={player === 'Player 1' ? 'player' : 'player2'}>{player}'s Turn</div>
			<div className="board">
				{board.map((element) => {
					if (element.missed === true) {
						return (
							<div className={element.missed ? 'squareMiss' : 'square'} key={element.key}>
								<FontAwesomeIcon icon={faTimes} />
							</div>
						);
					} else if (element.hit === true) {
						return (
							<div className={element.missed ? 'squareMiss' : 'square'} key={element.key}>
								<FontAwesomeIcon icon={faFireAlt} />
							</div>
						);
					} else {
						return (
							<div className={element.missed ? 'squareMiss' : 'square'} key={element.key}>
								<FontAwesomeIcon onClick={() => clickHandler(element.key)} icon={faWater} />
							</div>
						);
					}
				})}
			</div>
		</div>
	);
};
export default GameBoard;
