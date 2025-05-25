import { useContext } from 'react';
import DarkModeContext from '../../contexts/DarkModeContext';

const Player = ({ player, isPlayerTurn }) => {
	const darkMode = useContext(DarkModeContext);

	let playerClass = isPlayerTurn
		? darkMode
			? 'light-mode'
			: 'dark-mode'
		: darkMode
            ? 'dark-mode'
            : 'light-mode';

	return (
		<div className={`player-container ${playerClass}`}>
			<h2>Player {player}</h2>
		</div>
	);
};

export default Player;
