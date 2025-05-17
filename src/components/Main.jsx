import { useEffect, useState } from 'react';
import Grid from './Grid';
import { getRandomElement } from '../shared/utils';
import { palette } from '../shared/colors';

const Main = ({ currentPlayer, setCurrentPlayer }) => {
	const [winner, setWinner] = useState(null);
	const [boxValues, setBoxValues] = useState(getNewBoxValues());

	function getNewBoxValues() {
		let newBoxValues = [];
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
		let winPatterns = [
			`${b[0].mark}${b[1].mark}${b[2].mark}`,
			`${b[3].mark}${b[4].mark}${b[5].mark}`,
			`${b[6].mark}${b[7].mark}${b[8].mark}`,
			`${b[0].mark}${b[3].mark}${b[6].mark}`,
			`${b[1].mark}${b[4].mark}${b[7].mark}`,
			`${b[2].mark}${b[5].mark}${b[8].mark}`,
			`${b[0].mark}${b[4].mark}${b[8].mark}`,
			`${b[2].mark}${b[4].mark}${b[6].mark}`,
		];
		for (let pattern of winPatterns) {
			if (winOptions.includes(pattern)) {
				haveWinner = true;
				break;
			}
		}
		if (!haveWinner) {
			setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
		} else {
			setWinner(currentPlayer);
		}
	};

	useEffect(() => {
		if (!winner) checkForWinner();
	}, [boxValues]);

	useEffect(() => {
		if (winner) {
			// TODO: display modal with winner announcement
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
