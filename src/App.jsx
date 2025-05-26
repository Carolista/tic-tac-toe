import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import SettingsModal from './components/settings/SettingsModal';
import DarkModeContext from './contexts/DarkModeContext';
import CurrentPlayerContext from './contexts/CurrentPlayerContext.js';
import CurrentPaletteContext from './contexts/CurrentPaletteContext';
import { getRandomElement } from './shared/utils';
import { palettes } from './shared/colors';
import StatsModal from './components/StatsModal.jsx';

// POSSIBLE FUTURE UPDATES
// TODO: make some palettes unavailable and
// unlock them at intervals as user plays more games

function App() {
	let initialPalette =
		JSON.parse(localStorage.getItem('palette')) || getRandomElement(palettes);
	let initialMode = JSON.parse(localStorage.getItem('darkMode')) || false;
	let initialGamesPlayed = JSON.parse(localStorage.getItem('gamesPlayed')) || 0;
	let initialGamesWonByX = JSON.parse(localStorage.getItem('gamesWonByX')) || 0;
	let initialGamesWonByO = JSON.parse(localStorage.getItem('gamesWonByO')) || 0;

	const [currentPlayer, setCurrentPlayer] = useState(
		['X', 'O'][Math.floor(Math.random() * 2)]
	);
	const [showSettingsModal, setShowSettingsModal] = useState(false);
	const [showStatsModal, setShowStatsModal] = useState(false);
	const [currentPalette, setCurrentPalette] = useState(initialPalette);
	const [darkMode, setDarkMode] = useState(initialMode);

	const [gamesPlayed, setGamesPlayed] = useState(initialGamesPlayed);
	const [gamesWonByX, setGamesWonByX] = useState(initialGamesWonByX);
	const [gamesWonByO, setGamesWonByO] = useState(initialGamesWonByO);

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
		localStorage.setItem('gamesPlayed', JSON.stringify(gamesPlayed));
	}, [gamesPlayed]);

	useEffect(() => {
		localStorage.setItem('gamesWonByX', JSON.stringify(gamesWonByX));
	}, [gamesWonByX]);

	useEffect(() => {
		localStorage.setItem('gamesWonByO', JSON.stringify(gamesWonByO));
	}, [gamesWonByO]);

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
						<Header />
						<Main
							gamesPlayedPair={{ gamesPlayed, setGamesPlayed }}
							gamesWonByXPair={{ gamesWonByX, setGamesWonByX }}
							gamesWonByOPair={{ gamesWonByO, setGamesWonByO }}
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
						<Footer
							openSettingsModal={handleOpenSettingsModal}
							openStatsModal={handleOpenStatsModal}
						/>
					</DarkModeContext.Provider>
				</CurrentPlayerContext.Provider>
			</CurrentPaletteContext.Provider>
		</div>
	);
}

export default App;
