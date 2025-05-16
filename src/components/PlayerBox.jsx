const PlayerBox = ({ player, isPlayerTurn }) => {
	let playerClass = isPlayerTurn ? 'current-player' : 'alt-player';
	return (
		<div className={`player-box ${playerClass}`}>
			<h2>Player {player}</h2>
		</div>
	);
};

export default PlayerBox;
