const Footer = ({ openModal }) => {
	return (
		<footer>
			<div id="settings-gear">
				<i className="fa-solid fa-gear" onClick={openModal} />
			</div>
		</footer>
	);
};

export default Footer;
