import { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';
import Settings from './components/settings/Settings';
import DarkModeContext from './contexts/DarkModeContext';
import PlayerContext from './contexts/PlayerContext';
import PaletteContext from './contexts/PaletteContext';
import { getRandomElement } from './shared/utils';
import { palettes } from './shared/colors';

// TODO: add a settings modal

// TODO: add localStorage for saving settings for next time
// TODO: provide stats on past games using localStorage
// TODO: make some palettes unavailable and
// unlock them at intervals as user plays more games

function App() {
	const [currentPlayer, setCurrentPlayer] = useState(
		['X', 'O'][Math.floor(Math.random() * 2)]
	);
	const [palette, setPalette] = useState(getRandomElement(palettes));
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		document
			.querySelector('html')
			.classList.add(darkMode ? 'dark-mode' : 'light-mode');
		document
			.querySelector('html')
			.classList.remove(darkMode ? 'light-mode' : 'dark-mode');
	}, [darkMode]);

	return (
		<div id="window">
			<PaletteContext.Provider value={palette}>
				<PlayerContext.Provider value={currentPlayer}>
					<DarkModeContext.Provider value={darkMode}>
						<Header />
						<Main setCurrentPlayer={setCurrentPlayer} palette={palette} />
						<Settings setPalette={setPalette} setDarkMode={setDarkMode} />
					</DarkModeContext.Provider>
				</PlayerContext.Provider>
			</PaletteContext.Provider>
		</div>
	);
}

export default App;
