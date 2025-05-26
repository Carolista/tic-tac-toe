const Footer = ({ openSettingsModal, openStatsModal }) => {
	return (
		<footer>
			<div id="settings-icons">
				<i className="fa-solid fa-gear fa-lg" onClick={openSettingsModal} />
				<i className="fa-solid fa-chart-simple fa-lg" onClick={openStatsModal} />
			</div>
		</footer>
	);
};

export default Footer;
