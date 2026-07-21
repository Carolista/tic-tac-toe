import { use } from 'react';
import Player from './Player';
import './gameplay.css';
import { CurrentPlayerContext } from '@context/CurrentPlayerContext';

const Players = ({ resetGame }) => {
	const { currentPlayer } = use(CurrentPlayerContext);

	return (
		<div className='game__players'>
			{currentPlayer ? (
				<>
					<Player playerId='X' isPlayerTurn={currentPlayer == 'X'} />
					<Player playerId='O' isPlayerTurn={currentPlayer == 'O'} />
				</>
			) : (
				<div className='game__reset'>
					<h2 onClick={resetGame}>Reset Game</h2>
				</div>
			)}
		</div>
	);
};

export default Players;
