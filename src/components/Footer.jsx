import PlayerBox from './PlayerBox';

const Footer = ({ player }) => {
	// Displays both players and indicates which player is currently taking their turn
	return (
		<footer>
			<PlayerBox player="X" isPlayerTurn={player == 'X'} />
			<PlayerBox player="O" isPlayerTurn={player == 'O'} />
		</footer>
	);
};

export default Footer;
