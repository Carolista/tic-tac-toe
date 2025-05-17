import { useEffect, useState } from 'react';
import Grid from './Grid';

const initialMarks = {
	0: null,
	1: null,
	2: null,
	3: null,
	4: null,
	5: null,
	6: null,
	7: null,
	8: null,
};

const Main = ({ currentPlayer, setCurrentPlayer }) => {
	const [winner, setWinner] = useState(null);
	const [playerMarks, setPlayerMarks] = useState(initialMarks);

	const checkForWinner = () => {
        let haveWinner = false;
        let winOptions = ["XXX", "OOO"];
		let p = playerMarks;
        let winPatterns = [
            `${p[0]}${p[1]}${p[2]}`,
            `${p[3]}${p[4]}${p[5]}`,
            `${p[6]}${p[7]}${p[8]}`,
            `${p[0]}${p[3]}${p[6]}`,
            `${p[1]}${p[4]}${p[7]}`,
            `${p[2]}${p[5]}${p[8]}`,
            `${p[0]}${p[4]}${p[8]}`,
            `${p[2]}${p[4]}${p[6]}`
        ]
        winPatterns.forEach(pattern => {
            console.log(pattern);
            if (winOptions.includes(pattern)) {
                haveWinner = true;
                setWinner(currentPlayer);
            }
        }); 
        if (!haveWinner) setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
	};

    useEffect(() => {
        checkForWinner();
    }, [playerMarks]);

    useEffect(() => {
        setPlayerMarks(initialMarks);
        if (winner) {
            console.log(`Player ${winner} is the winner!`);
            setWinner(null);
        } 
    }, [winner]);

	const handlePlayerMark = id => {
		let idNum = id[5];
		if (!playerMarks[idNum]) {
			setPlayerMarks({
				...playerMarks,
				[idNum]: currentPlayer,
			});
		}
	};

	return (
		<main>
			<Grid
				player={currentPlayer}
				playerMarks={playerMarks}
				markCell={handlePlayerMark}
			/>
		</main>
	);
};

export default Main;
