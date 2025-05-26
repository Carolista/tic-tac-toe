import Modal from './Modal';

const StatsModal = ({ closeModal }) => {
	let gamesPlayed = JSON.parse(localStorage.getItem('gamesPlayed')) || 0;
	let gamesWonByX = JSON.parse(localStorage.getItem('gamesWonByX')) || 0;
	let percentWonByX = gamesPlayed ? Math.round((100 * gamesWonByX) / gamesPlayed) : 0;
	let gamesWonByO = JSON.parse(localStorage.getItem('gamesWonByO')) || 0;
	let percentWonByO = gamesPlayed ? Math.round((100 * gamesWonByO) / gamesPlayed) : 0;
	let draws = gamesPlayed - gamesWonByX - gamesWonByO;
	let percentDraws = gamesPlayed ? Math.round((100 * draws) / gamesPlayed) : 0;

	return (
		<Modal id="stats-modal" align="middle" closeModal={closeModal}>
			<div id="stats-content">
				<h2>Statistics</h2>
				<table id="stats-table">
					<tr>
						<td>Games Played:</td>
						<td>{gamesPlayed}</td>
						<td></td>
					</tr>
					<tr>
						<td>Games won by Player X:</td>
						<td>{gamesWonByX}</td>
						<td>({percentWonByX}%)</td>
					</tr>
					<tr>
						<td>Games won by Player O:</td>
						<td>{gamesWonByO}</td>
						<td>({percentWonByO}%)</td>
					</tr>
					<tr>
						<td>Draws:</td>
						<td>{draws}</td>
						<td>({percentDraws}%)</td>
					</tr>
				</table>
			</div>
		</Modal>
	);
};

export default StatsModal;
