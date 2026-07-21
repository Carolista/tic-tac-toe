import { use, useState } from 'react';
import { SettingsContext } from '../../context/SettingsContext.jsx';

const Player = ({ playerId, isPlayerTurn }) => {
	const { darkMode } = use(SettingsContext);

	const [shouldScale, setShouldScale] = useState(false);

	let playerClass = darkMode === isPlayerTurn ? 'light-mode' : 'dark-mode';

	// Had to handle this with JS because .scale-up:hover was
	// causing side effects when browser page was resizing
	const handleMouseEnter = () => {
		if (playerId && isPlayerTurn) setShouldScale(true);
		else setShouldScale(false);
	};
	const handleMouseLeave = () => {
		setShouldScale(false);
	};

	return (
		<div
			className={`player-container ${playerClass} ${shouldScale && 'scale-up'}`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			<h2>Player {playerId}</h2>
		</div>
	);
};

export default Player;
