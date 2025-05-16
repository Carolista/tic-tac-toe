import PlayerBox from './PlayerBox';

const Footer = ({ player }) => {
	return (
		<footer>
			<div>
				<PlayerBox player="X" isPlayerTurn={player == 'X'} />
			</div>
			<div>
				<PlayerBox player="O" isPlayerTurn={player == 'O'} />
			</div>
		</footer>
	);
};

export default Footer;
