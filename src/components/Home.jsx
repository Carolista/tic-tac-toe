import { useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import DarkModeContext from '../contexts/DarkModeContext';
import CurrentPaletteContext from '../contexts/CurrentPaletteContext';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SettingsModal from './settings/SettingsModal';
import StatsModal from './stats/StatsModal.jsx';

function Home() {
	const { currentPalette } = useContext(CurrentPaletteContext);
	const { darkMode } = useContext(DarkModeContext);

	let initialStats = JSON.parse(localStorage.getItem('stats')) || {
		gamesPlayed: 0,
		gamesWonByX: 0,
		gamesWonByO: 0,
	};

	const [showSettingsModal, setShowSettingsModal] = useState(false);
	const [showStatsModal, setShowStatsModal] = useState(false);
	const [stats, setStats] = useState(initialStats);

	useEffect(() => {
		localStorage.setItem('palette', JSON.stringify(currentPalette));
	}, [currentPalette]);

	useEffect(() => {
		localStorage.setItem('darkMode', JSON.stringify(darkMode));
	}, [darkMode]);

	useEffect(() => {
		localStorage.setItem('stats', JSON.stringify(stats));
	}, [stats]);

	const handleOpenSettingsModal = () => setShowSettingsModal(true);
	const handleCloseSettingsModal = () => setShowSettingsModal(false);

	const handleOpenStatsModal = () => setShowStatsModal(true);
	const handleCloseStatsModal = () => setShowStatsModal(false);

	return (
		<>
			<Header />
			<Main statsPair={{ stats, setStats }} />
			<Footer
				openSettingsModal={handleOpenSettingsModal}
				openStatsModal={handleOpenStatsModal}
			/>
			{showSettingsModal &&
				createPortal(
					<SettingsModal closeModal={handleCloseSettingsModal} />,
					document.getElementById('modal-root')
				)}
			{showStatsModal &&
				createPortal(
					<StatsModal closeModal={handleCloseStatsModal} />,
					document.getElementById('modal-root')
				)}
		</>
	);
}

export default Home;
