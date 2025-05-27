import './App.css';
import Home from './components/Home.jsx';
import { HashRouter, Routes, Route, Navigate } from 'react-router';
import { useEffect, useState } from 'react';
import DarkModeContext from './contexts/DarkModeContext.js';
import CurrentPlayerContext from './contexts/CurrentPlayerContext.js';
import CurrentPaletteContext from './contexts/CurrentPaletteContext';
import { getRandomElement } from './common/utils.js';
import { palettes } from './common/colors.js';
import About from './components/about/About.jsx';

// POSSIBLE FUTURE UPDATES
// TODO: Make some palettes unavailable and unlock them at intervals as user plays more games
// TODO: Add rotating images in About component to demonstrate win patterns

function App() {
	let initialPalette =
		JSON.parse(localStorage.getItem('palette')) || getRandomElement(palettes);
	let initialMode = JSON.parse(localStorage.getItem('darkMode')) || false;

	const [currentPlayer, setCurrentPlayer] = useState(
		['X', 'O'][Math.floor(Math.random() * 2)]
	);
	const [currentPalette, setCurrentPalette] = useState(initialPalette);
	const [darkMode, setDarkMode] = useState(initialMode);

	// Handle topmost level of DOM so that viewport also matches
	useEffect(() => {
		document
			.querySelector('html')
			.classList.add(darkMode ? 'dark-mode' : 'light-mode');
		document
			.querySelector('html')
			.classList.remove(darkMode ? 'light-mode' : 'dark-mode');
	}, [darkMode]);

	return (
		<div id="window" className={darkMode ? 'dark-mode' : 'light-mode'}>
			<CurrentPaletteContext.Provider
				value={{ currentPalette, setCurrentPalette }}>
				<CurrentPlayerContext.Provider
					value={{ currentPlayer, setCurrentPlayer }}>
					<DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
						<HashRouter>
							<Routes>
								<Route path="/" element={<Navigate to="/play" replace />} />
								<Route path="/play" element={<Home />} />
								<Route path="/about" element={<About />} />
							</Routes>
						</HashRouter>
					</DarkModeContext.Provider>
				</CurrentPlayerContext.Provider>
			</CurrentPaletteContext.Provider>
		</div>
	);
}

export default App;
