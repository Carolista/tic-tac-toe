import { useState } from 'react';
import Grid from './Grid';

const Main = () => {

    let [playerMarks, setPlayerMarks] = useState({
		0: null,
		1: null,
		2: 'X',
		3: null,
		4: 'O',
		5: 'O',
		6: null,
		7: null,
		8: null,
	});

	return (
		<main>
			<Grid playerMarks={playerMarks} />
		</main>
	);
};

export default Main;
