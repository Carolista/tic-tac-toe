import { useEffect, useState } from 'react';
import Grid from './Grid';
import { getRandomElement } from '../shared/utils';
import { palettes } from '../shared/colors';

const Main = ({ currentPlayer, setCurrentPlayer }) => {
	const [winner, setWinner] = useState(null);
	const [boxValues, setBoxValues] = useState(getNewBoxValues());

	function getNewBoxValues() {
		let newBoxValues = [];
		let palette = getRandomElement(palettes); // TEMP until ability to choose

		// Create objects for each square in the grid
		for (let i = 0; i < 9; i++) {
			newBoxValues[i] = { id: i, mark: null, color: getRandomElement(palette) };
		}
		return newBoxValues;
	}

	const createNewGame = () => {
		setWinner(null);
		setBoxValues(getNewBoxValues());
	};

	const checkForWinner = () => {
		let haveWinner = false;
		let winOptions = ['XXX', 'OOO'];
		let b = boxValues;
		// Create patterns dynamically each time with updated boxValues
		let patternsToCheck = [
			`${b[0].mark}${b[1].mark}${b[2].mark}`,
			`${b[3].mark}${b[4].mark}${b[5].mark}`,
			`${b[6].mark}${b[7].mark}${b[8].mark}`,
			`${b[0].mark}${b[3].mark}${b[6].mark}`,
			`${b[1].mark}${b[4].mark}${b[7].mark}`,
			`${b[2].mark}${b[5].mark}${b[8].mark}`,
			`${b[0].mark}${b[4].mark}${b[8].mark}`,
			`${b[2].mark}${b[4].mark}${b[6].mark}`,
		];
		for (let pattern of patternsToCheck) {
			if (winOptions.includes(pattern)) {
				haveWinner = true;
				break;
			}
		}
		if (haveWinner) {
			setWinner(currentPlayer);
		} else {
			setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
		}
	};

	useEffect(() => {
		if (!winner) checkForWinner();
	}, [boxValues]);

	useEffect(() => {
		if (winner) {
			// TODO: display modal with winner announcement instead
			alert('We have a winner! Congrats, Player ' + winner + '!');
			if (confirm('\nDo you want to play again?\n')) {
				createNewGame();
			}
		}
	}, [winner]);

	const handlePlayerMark = id => {
		if (!boxValues[id].mark) {
			let updatedBoxValues = boxValues.map(box => {
				return box.id == id ? { ...box, mark: currentPlayer } : { ...box };
			});
			setBoxValues(updatedBoxValues);
		}
	};

	return (
		<main>
			<Grid
				player={currentPlayer}
				boxValues={boxValues}
				markCell={handlePlayerMark}
			/>
		</main>
	);
};

export default Main;
