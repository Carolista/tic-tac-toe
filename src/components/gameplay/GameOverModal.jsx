import Modal from '../Modal';

const GameOverModal = ({ winner, closeModal }) => {
	return (
		<Modal id="game-over-modal" align={'middle'} closeModal={closeModal}>
			<div id="game-over">
				{winner ? (
					<h1>{`Congrats, Player ${winner}!`}</h1>
				) : (
					<h1>Game Over (Draw)</h1>
				)}
			</div>
		</Modal>
	);
};

export default GameOverModal;
