import { useState } from 'react';
import { useContext } from 'react';
import DarkModeContext from '../../contexts/DarkModeContext';
import Modal from '../shared/Modal';

const GameOverModal = ({ winner, createNewGame, closeModal }) => {
	const darkMode = useContext(DarkModeContext);

	const [isDone, setIsDone] = useState(false);

	const handlePlayAgain = event => {
		event.preventDefault();
		createNewGame();
		closeModal();
	};

	const handleDone = event => {
		event.preventDefault();
		setIsDone(true);
	};

	const handleClose = event => {
		event.preventDefault();
		setIsDone(false);
		closeModal();
	};

	return (
		<Modal id="game-over-modal" closeModal={handleClose}>
			{isDone ? (
				<div id="thanks" className={darkMode ? 'light-mode' : 'dark-mode'}>
					<h2>Thanks for playing!</h2>
					<div className="button-group">
						<button onClick={handleClose}>Close</button>
					</div>
				</div>
			) : (
				<div id="congrats" className={darkMode ? 'light-mode' : 'dark-mode'}>
					{winner ? (
						<h1>{`Congrats, Player ${winner}!`}</h1>
					) : (
						<h1>Game Over (Draw)</h1>
					)}
					<div className="button-group">
						<button onClick={handlePlayAgain}>Play Again</button>
						<button onClick={handleDone}>Done</button>
					</div>
				</div>
			)}
		</Modal>
	);
};

export default GameOverModal;
