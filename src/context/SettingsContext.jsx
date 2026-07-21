import { createContext, useEffect, useState } from 'react';
import { getRandomElement } from '@shared/utils';

export const SettingsContext = createContext();

let initialPalette =
	JSON.parse(localStorage.getItem('palette')) || getRandomElement(palettes);
let initialMode = JSON.parse(localStorage.getItem('darkMode')) || false;

export const SettingsContextProvider = ({ children }) => {
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
		<SettingsContext.Provider
			value={{ currentPalette, setCurrentPalette, darkMode, setDarkMode }}>
			{children}
		</SettingsContext.Provider>
	);
};
