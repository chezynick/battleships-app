import React from 'react';
import BoatHolder from './BoatHolder';

const BoatUpdate = ({ player, board, playerTurn }) => {
	const boat1 = board.filter((a) => a.containsShip === player[0].name && a.hit === true);
	const boat2 = board.filter((a) => a.containsShip === player[1].name && a.hit === true);
	const boat3 = board.filter((a) => a.containsShip === player[2].name && a.hit === true);
	const boat4 = board.filter((a) => a.containsShip === player[3].name && a.hit === true);
	console.log(playerTurn, player);

	{
		if ((playerTurn === false && player[0].name === 5) || (playerTurn === true && player[0].name === 1)) {
			return (
				<div className="boatupdateBorder">
					<BoatHolder player={player[0]} boat={boat1} />
					<BoatHolder player={player[1]} boat={boat2} />
					<BoatHolder player={player[2]} boat={boat3} />
					<BoatHolder player={player[3]} boat={boat4} />
				</div>
			);
		} else {
			return (
				<div className="boatupdate">
					<BoatHolder player={player[0]} boat={boat1} />
					<BoatHolder player={player[1]} boat={boat2} />
					<BoatHolder player={player[2]} boat={boat3} />
					<BoatHolder player={player[3]} boat={boat4} />
				</div>
			);
		}
	}
};
export default BoatUpdate;
