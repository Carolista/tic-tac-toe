import { createContext, useState } from 'react';

export const CurrentPlayerContext = createContext();

export const CurrentPlayerContextProvider = ({ children }) => {
    const [currentPlayer, setCurrentPlayer] = useState(
		['X', 'O'][Math.floor(Math.random() * 2)]
	);

    return (
        <CurrentPlayerContext.Provider value={{ currentPlayer, setCurrentPlayer }}>
            {children}
        </CurrentPlayerContext.Provider>
    )
}
