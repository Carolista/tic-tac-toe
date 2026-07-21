import { use } from 'react';
import { Link } from 'react-router';
import { SettingsContext } from '@context/SettingsContext.jsx';

const Footer = ({ openSettingsModal, openStatsModal }) => {
	const { darkMode } = use(SettingsContext);

	return (
		<footer>
			<div id="footer-icons">
				<i
					className="fa-solid fa-gear fa-xl"
					onClick={openSettingsModal}
					title="Settings"></i>
				<Link
					to="/about"
					className={darkMode ? 'icon-link-dark' : 'icon-link-light'}>
					<i
						className="fa-solid fa-circle-question fa-xl"
						title="How to Play"></i>
				</Link>
				<i
					className="fa-solid fa-chart-simple fa-xl"
					onClick={openStatsModal}
					title="Statistics"></i>
			</div>
		</footer>
	);
};

export default Footer;
