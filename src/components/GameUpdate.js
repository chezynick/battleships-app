import React from 'react';

const GameUpdate = ({ board, board2 }) => {
	const boardStatus = board.filter((a) => a.hit === true);
	const player1deaths = (boardStatus.length / 15) * 100;
	const board2Status = board2.filter((a) => a.hit === true);
	const player2deaths = (board2Status.length / 15) * 100;

	return (
		<div className="gameUpdate">
			<div className="playerupdate">you have killed {player2deaths.toFixed(0)}% of player 2's sailors</div>
			{player1deaths === 100 ? <div className="winner">Player 2 wins</div> : ''}
			{player2deaths === 100 ? <div className="winner">Player 1 wins</div> : ''}
			<div className="playerupdate"> you have killed {player1deaths.toFixed(0)}% of player 1's sailors</div>
		</div>
	);
};
export default GameUpdate;
