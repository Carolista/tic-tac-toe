import { useContext } from 'react';
import DarkModeContext from '../../contexts/DarkModeContext';

const Player = ({ currentPlayer, isPlayerTurn }) => {
	const darkMode = useContext(DarkModeContext);

	let playerClass = isPlayerTurn
		? darkMode
			? 'light-mode'
			: 'dark-mode'
		: darkMode
		? 'dark-mode'
		: 'light-mode';

	return (
		<div
			className={`player-container ${playerClass} ${
				isPlayerTurn && 'scale-up'
			}`}>
			<h2>Player {currentPlayer}</h2>
		</div>
	);
};

export default Player;
