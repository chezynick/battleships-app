import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFireAlt, faWater } from '@fortawesome/free-solid-svg-icons';
const GameBoard2 = ({ board2, updateBoard2, shipSunk }) => {
	const clickHandler = (square) => {
		board2.forEach((a) => {
			if (a.key === square) {
				if (a.containsShip) {
					a.hit = true;
					//function to work out how many times this ship has been hit
					const hitLength = board2.filter(
						(ship) => ship.containsShip === a.containsShip && ship.hit === true
					);
					//calls func with ship name and amount of hits from above
					shipSunk(a.containsShip, hitLength.length);
				} else {
					a.missed = true;
				}
			}
		});
		updateBoard2([...board2]);
	};

	return (
		<div>
			<div className="player">Player 1's Turn</div>

			<div className="board2">
				{board2.map((element) => {
					return (
						<div
							className={element.missed ? 'squareMiss2' : 'square2'}
							key={element.key}
							onClick={() => clickHandler(element.key)}
						>
							{element.hit ? <FontAwesomeIcon icon={faFireAlt} /> : <FontAwesomeIcon icon={faWater} />}
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default GameBoard2;
