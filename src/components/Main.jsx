import { useEffect, useState, useContext } from 'react';
import Grid from './gameplay/Grid';
import GameOverModal from './gameplay/GameOverModal';
import { getRandomElement } from '../shared/utils';
import { createPortal } from 'react-dom';
import DarkModeContext from '../contexts/DarkModeContext';
import PlayerContext from '../contexts/PlayerContext';
import Players from './gameplay/Players';
import PaletteContext from '../contexts/PaletteContext';

const Main = ({ setCurrentPlayer }) => {
	const currentPlayer = useContext(PlayerContext);
	const darkMode = useContext(DarkModeContext);
	const palette = useContext(PaletteContext);

	const [squareValues, setSquareValues] = useState(getNewSquareValues());
	const [markCount, setMarkCount] = useState(0);
	const [winner, setWinner] = useState(null);
	const [showModal, setShowModal] = useState(false);

	function getNewSquareValues() {
		let newSquareValues = [];

		// Create objects for each square in the grid
		for (let i = 0; i < 9; i++) {
			newSquareValues[i] = {
				id: i,
				mark: null,
				color: getRandomElement(palette),
			};
		}
		return newSquareValues;
	}

	function updateColors() {
		// Create objects for each square in the grid
		let newSquareValues = squareValues.map((obj, i) => {
			return { ...squareValues[i], color: getRandomElement(palette) };
		});

		setSquareValues(newSquareValues);
	}

	useEffect(() => {
		updateColors();
	}, [palette]);

	const createNewGame = () => {
		closeModal();
		setWinner(null);
		setSquareValues(getNewSquareValues());
		setMarkCount(0);
	};

	const closeModal = () => {
		setShowModal(false);
	};

	const handleNoWinner = () => {
		setShowModal(true);
	};

	const checkForWinner = () => {
		let haveWinner = false;
		if (markCount === 9) {
			handleNoWinner();
			return;
		}
		let winOptions = ['XXX', 'OOO'];
		let b = squareValues;
		// Create patterns dynamically each time with updated squareValues
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
	}, [squareValues]);

	useEffect(() => {
		if (winner) {
			setShowModal(true);
		}
	}, [winner]);

	const handlePlayerMark = id => {
		if (!squareValues[id].mark) {
			let updatedSquareValues = squareValues.map(square => {
				return square.id == id
					? { ...square, mark: currentPlayer }
					: { ...square };
			});
			setSquareValues(updatedSquareValues);
			setMarkCount(markCount + 1);
		}
	};

	return (
		<main className={darkMode ? 'dark-mode' : 'light-mode'}>
			<Grid squareValues={squareValues} markCell={handlePlayerMark} />
			<Players player={currentPlayer} />
			{showModal &&
				createPortal(
					<GameOverModal
						winner={winner}
						createNewGame={createNewGame}
						closeModal={closeModal}
					/>,
					document.getElementById('modal-root')
				)}
		</main>
	);
};

export default Main;
