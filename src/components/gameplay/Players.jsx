import Player from './Player';
import { useContext } from 'react';
import DarkModeContext from '../../contexts/DarkModeContext';
import './gameplay.css';

const Players = ({ player }) => {

	const darkMode = useContext(DarkModeContext);

    // TODO: This might be an unnecessary abstraction

	// Displays both players and indicates which player is currently taking their turn
	return (
		<div id="players" className={darkMode ? 'dark-mode' : 'light-mode'}>
			<Player player="X" isPlayerTurn={player == 'X'} />
			<Player player="O" isPlayerTurn={player == 'O'} />
		</div>
	);
};

export default Players;
