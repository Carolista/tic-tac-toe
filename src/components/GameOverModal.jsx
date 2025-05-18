import { useState } from 'react';

const GameOverModal = ({ winner, createNewGame, closeModal }) => {
	const [isDone, setIsDone] = useState(false);

	const handlePlayAgain = event => {
		event.preventDefault();
		createNewGame();
	};

	const handleDone = event => {
		event.preventDefault();
		setIsDone(true);
	};

    const handleClose = event => {
        event.preventDefault();
        setIsDone(false);
        closeModal();
    }

	return (
		<div id="game-over-modal">
			{isDone ? (
				<div id="thanks">
					<h2>Thanks for playing!</h2>
                    <div className="button-group">
						<button onClick={handleClose}>Close</button>
					</div>
				</div>
			) : (
				<div id="congrats">
					<h2>Congratulations, Player {winner}!</h2>
					<div className="button-group">
						<button onClick={handlePlayAgain}>Play Again</button>
						<button onClick={handleDone}>Done</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default GameOverModal;
