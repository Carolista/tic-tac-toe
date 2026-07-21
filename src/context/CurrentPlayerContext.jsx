import { createContext, useState } from 'react';
import { getRandomElement } from '@shared/utils';

export const CurrentPlayerContext = createContext();

export const CurrentPlayerContextProvider = ({ children }) => {
	const [currentPlayer, setCurrentPlayer] = useState(
		getRandomElement(['X', 'O']),
	);

	return (
		<CurrentPlayerContext.Provider value={{ currentPlayer, setCurrentPlayer }}>
			{children}
		</CurrentPlayerContext.Provider>
	);
};
