import { useContext, useState } from 'react';
import DarkModeContext from '../../contexts/DarkModeContext';

const Player = ({ currentPlayer, isPlayerTurn }) => {
	const darkMode = useContext(DarkModeContext);

	const [shouldScale, setShouldScale] = useState(false);

	let playerClass = isPlayerTurn
		? darkMode
			? 'light-mode'
			: 'dark-mode'
		: darkMode
		? 'dark-mode'
		: 'light-mode';

    // Had to handle this with JS because .scale-up was 
    // causing side effects when browser page was resizing
	const handleMouseEnter = () => {
		if (isPlayerTurn) setShouldScale(true);
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
			<h2>Player {currentPlayer}</h2>
		</div>
	);
};

export default Player;
