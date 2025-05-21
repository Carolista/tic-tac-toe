import PlayerBox from './PlayerBox';
import { useContext } from 'react';
import DarkModeContext from '../../contexts/DarkModeContext';

const Player = ({ player }) => {
	const darkMode = useContext(DarkModeContext);

	// Displays both players and indicates which player is currently taking their turn
	return (
		<div id="player" className={darkMode ? 'dark-mode' : 'light-mode'}>
			<PlayerBox player="X" isPlayerTurn={player == 'X'} />
			<PlayerBox player="O" isPlayerTurn={player == 'O'} />
		</div>
	);
};

export default Player;
