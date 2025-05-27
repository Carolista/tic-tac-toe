import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SettingsModal from './settings/SettingsModal';
import DarkModeContext from '../contexts/DarkModeContext';
import CurrentPlayerContext from '../contexts/CurrentPlayerContext.js';
import CurrentPaletteContext from '../contexts/CurrentPaletteContext';
import { getRandomElement } from '../common/utils.js';
import { palettes } from '../common/colors.js';
import StatsModal from './stats/StatsModal.jsx';
import About from './about/About.jsx';

function Home() {
	let initialPalette =
		JSON.parse(localStorage.getItem('palette')) || getRandomElement(palettes);
	let initialMode = JSON.parse(localStorage.getItem('darkMode')) || false;
	let initialStats = JSON.parse(localStorage.getItem('stats')) || {
		gamesPlayed: 0,
		gamesWonByX: 0,
		gamesWonByO: 0,
	};

	const [currentPlayer, setCurrentPlayer] = useState(
		['X', 'O'][Math.floor(Math.random() * 2)]
	);
	const [showSettingsModal, setShowSettingsModal] = useState(false);
	const [showStatsModal, setShowStatsModal] = useState(false);
	const [currentPalette, setCurrentPalette] = useState(initialPalette);
	const [darkMode, setDarkMode] = useState(initialMode);
	const [stats, setStats] = useState(initialStats);

	// Handle topmost level of DOM so that viewport also matches
	useEffect(() => {
		document
			.querySelector('html')
			.classList.add(darkMode ? 'dark-mode' : 'light-mode');
		document
			.querySelector('html')
			.classList.remove(darkMode ? 'light-mode' : 'dark-mode');
	}, [darkMode]);

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
		<div id="window" className={darkMode ? 'dark-mode' : 'light-mode'}>
			<CurrentPaletteContext.Provider
				value={{ currentPalette, setCurrentPalette }}>
				<CurrentPlayerContext.Provider
					value={{ currentPlayer, setCurrentPlayer }}>
					<DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
						<BrowserRouter>
							<Routes>
								<Route
									path="/"
									element={
										<>
											<Header />
											<Main statsPair={{ stats, setStats }} />
											{showSettingsModal &&
												createPortal(
													<SettingsModal
														closeModal={handleCloseSettingsModal}
													/>,
													document.getElementById('modal-root')
												)}
											{showStatsModal &&
												createPortal(
													<StatsModal closeModal={handleCloseStatsModal} />,
													document.getElementById('modal-root')
												)}
											<Footer
												openSettingsModal={handleOpenSettingsModal}
												openStatsModal={handleOpenStatsModal}
											/>
										</>
									}
								/>
								<Route path="/about" element={<About />} />
							</Routes>
						</BrowserRouter>
					</DarkModeContext.Provider>
				</CurrentPlayerContext.Provider>
			</CurrentPaletteContext.Provider>
		</div>
	);
}

export default Home;
