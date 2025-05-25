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

// FIXME: Eliminate context where possible and modify remaining to include setter

// POSSIBLE FUTURE UPDATES
// TODO: add localStorage for saving settings for next time
// TODO: provide stats on past games using localStorage
// TODO: make some palettes unavailable and
// unlock them at intervals as user plays more games

function App() {
	const [currentPlayer, setCurrentPlayer] = useState(
		['X', 'O'][Math.floor(Math.random() * 2)]
	);
	const [showSettingsModal, setShowSettingsModal] = useState(false);
	const [currentPalette, setCurrentPalette] = useState(getRandomElement(palettes));
	const [darkMode, setDarkMode] = useState(false);

	// Handle topmost level of DOM so that viewport also matches
	useEffect(() => {
		document
			.querySelector('html')
			.classList.add(darkMode ? 'dark-mode' : 'light-mode');
		document
			.querySelector('html')
			.classList.remove(darkMode ? 'light-mode' : 'dark-mode');
	}, [darkMode]);

	const handleOpenModal = () => setShowSettingsModal(true);

	const handleCloseModal = () => setShowSettingsModal(false);

	return (
		<div id="window" className={darkMode ? 'dark-mode' : 'light-mode'}>
			<CurrentPaletteContext.Provider value={{ currentPalette, setCurrentPalette }}>
				<CurrentPlayerContext.Provider value={currentPlayer}>
					<DarkModeContext.Provider value={darkMode}>
						<Header />
						<Main setCurrentPlayer={setCurrentPlayer} />
						{showSettingsModal &&
							createPortal(
								<SettingsModal
									setDarkMode={setDarkMode}
									closeModal={handleCloseModal}
								/>,
								document.getElementById('modal-root')
							)}
						<Footer openModal={handleOpenModal} />
					</DarkModeContext.Provider>
				</CurrentPlayerContext.Provider>
			</CurrentPaletteContext.Provider>
		</div>
	);
}

export default App;
