import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShip, faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';

const BoatHolder = ({ player, boat }) => {
	return (
		<div className="boatHolder">
			{player.boat.length === boat.length ? (
				<FontAwesomeIcon size="3x" icon={faSkullCrossbones} />
			) : (
				<FontAwesomeIcon size="3x" icon={faShip} />
			)}
			<div className="hitHolder">
				<div className="hits">
					{player.boat.map((a) => (
						<div className="blueBlock" key={a}></div>
					))}
				</div>
				<div className="hits">
					{boat.map((a) => (
						<div className="redBlock" key={a}></div>
					))}
				</div>
			</div>
		</div>
	);
};
export default BoatHolder;
