import { useState } from 'react';
import Grid from './Grid';

const Main = ({ currentPlayer, setCurrentPlayer }) => {
	let [playerMarks, setPlayerMarks] = useState({
		0: null,
		1: null,
		2: null,
		3: null,
		4: null,
		5: null,
		6: null,
		7: null,
		8: null,
	});

	const handlePlayerMark = id => {
		let idNum = id[5];
        if (!playerMarks[idNum]) {
            setPlayerMarks({
                ...playerMarks,
                [idNum]: currentPlayer,
            });
        }
		setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
	};

	return (
		<main>
			<Grid player={currentPlayer} playerMarks={playerMarks} markCell={handlePlayerMark} />
		</main>
	);
};

export default Main;
