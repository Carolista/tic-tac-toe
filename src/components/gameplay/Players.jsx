import { useContext } from 'react';
import Player from './Player';
import './gameplay.css';
import CurrentPlayerContext from '../../contexts/CurrentPlayerContext';

const Players = ({ resetGame }) => {
	const currentPlayer = useContext(CurrentPlayerContext);

	return (
		<div id="players">
			{currentPlayer ? (
				<>
					<Player currentPlayer="X" isPlayerTurn={currentPlayer == 'X'} />
					<Player currentPlayer="O" isPlayerTurn={currentPlayer == 'O'} />
				</>
			) : (
				<div id="reset-game">
					<h2 onClick={resetGame}>Reset Game</h2>
				</div>
			)}
		</div>
	);
};

export default Players;
