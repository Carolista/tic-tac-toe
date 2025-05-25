import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import SettingsModal from './components/settings/SettingsModal';
import DarkModeContext from './contexts/DarkModeContext';
import PlayerContext from './contexts/PlayerContext.js';
import PaletteContext from './contexts/PaletteContext';
import { getRandomElement } from './shared/utils';
import { palettes } from './shared/colors';

// FIXME: Eliminate context where possible and modify remaining to include setter
// FIXME: simplify yes/no for replay and make sure if no, game cannot still be played
// FIXME: create Button component and use everywhere

// TODO: add localStorage for saving settings for next time
// TODO: provide stats on past games using localStorage
// TODO: make some palettes unavailable and
// unlock them at intervals as user plays more games

function App() {
	const [currentPlayer, setCurrentPlayer] = useState(
		['X', 'O'][Math.floor(Math.random() * 2)]
	);
	const [showSettingsModal, setShowSettingsModal] = useState(false);
	const [palette, setPalette] = useState(getRandomElement(palettes));
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
			<PaletteContext.Provider value={palette}>
				<PlayerContext.Provider value={currentPlayer}>
					<DarkModeContext.Provider value={darkMode}>
						<Header />
						<Main setCurrentPlayer={setCurrentPlayer} palette={palette} />
						{showSettingsModal &&
							createPortal(
								<SettingsModal
									setPalette={setPalette}
									setDarkMode={setDarkMode}
									closeModal={handleCloseModal}
								/>,
								document.getElementById('modal-root')
							)}
						<Footer openModal={handleOpenModal} />
					</DarkModeContext.Provider>
				</PlayerContext.Provider>
			</PaletteContext.Provider>
		</div>
	);
}

export default App;
