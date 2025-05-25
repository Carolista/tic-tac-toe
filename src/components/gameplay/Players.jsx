import Player from './Player';
import './gameplay.css';

const Players = ({ currentPlayer, resetGame }) => {
	return (
		<div id="players">
			{currentPlayer ? (
				<>
					<Player currentPlayer="X" isPlayerTurn={currentPlayer == 'X'} />
					<Player currentPlayer="O" isPlayerTurn={currentPlayer == 'O'} />
				</>
			) : (
				<div id="play-again">
					<h2 onClick={resetGame}>PLAY AGAIN?</h2>
				</div>
			)}
		</div>
	);
};

export default Players;
