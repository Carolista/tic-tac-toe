const Footer = ({ openModal }) => {
	return (
		<footer>
			<div id="settings-gear" className="wobble">
				<i className="fa-solid fa-gear fa-lg" onClick={openModal} />
			</div>
		</footer>
	);
};

export default Footer;
