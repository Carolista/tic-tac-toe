import { useEffect, useState, useContext } from 'react';
import { createPortal } from 'react-dom';
import Grid from './gameplay/Grid';
import GameOverModal from './gameplay/GameOverModal';
import { getRandomElement } from '../shared/utils';
import CurrentPlayerContext from '../contexts/CurrentPlayerContext.js';
import Players from './gameplay/Players';
import CurrentPaletteContext from '../contexts/CurrentPaletteContext.js';

const Main = ({ setCurrentPlayer }) => {
	const currentPlayer = useContext(CurrentPlayerContext);
	const { currentPalette } = useContext(CurrentPaletteContext);

	const [squareValues, setSquareValues] = useState(getNewSquareValues());
	const [markCount, setMarkCount] = useState(0);
	const [winner, setWinner] = useState(null);
	const [showGameOverModal, setShowGameOverModal] = useState(false);

	function getNewSquareValues() {
		let newSquareValues = [];

		// Create objects for each square in the grid
		for (let i = 0; i < 9; i++) {
			newSquareValues[i] = {
				id: i,
				mark: null,
				color: getRandomElement(currentPalette),
			};
		}
		return newSquareValues;
	}

	function updateColors() {
		// Create objects for each square in the grid
		let newSquareValues = squareValues.map((obj, i) => {
			return { ...squareValues[i], color: getRandomElement(currentPalette) };
		});

		setSquareValues(newSquareValues);
	}

	useEffect(() => {
		updateColors();
	}, [currentPalette]);

	const createNewGame = () => {
		setWinner(null);
		setSquareValues(getNewSquareValues());
		setMarkCount(0);
		setCurrentPlayer(getRandomElement(['X', 'O']));
	};

	const closeModal = () => {
		setShowGameOverModal(false);
		setCurrentPlayer(null);
	};

	const handleNoWinner = () => {
		setShowGameOverModal(true);
		setCurrentPlayer(null);
	};

	const checkForWinner = () => {
		let haveWinner = false;
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
			if (markCount === 9) handleNoWinner();
			else setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
		}
	};

	useEffect(() => {
		if (currentPlayer && !winner) checkForWinner();
	}, [squareValues]);

	useEffect(() => {
		if (winner) {
			setShowGameOverModal(true);
		}
	}, [winner]);

	const handlePlayerMark = id => {
		if (!winner && !squareValues[id].mark) {
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
		<main>
			<Grid squareValues={squareValues} markCell={handlePlayerMark} />
			<Players resetGame={createNewGame} />
			{showGameOverModal &&
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
