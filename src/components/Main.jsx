import { useEffect, useState, useContext } from 'react';
import Grid from './gameplay/Grid';
import GameOverModal from './gameplay/GameOverModal';
import { getRandomElement } from '../shared/utils';
import { createPortal } from 'react-dom';
import DarkModeContext from '../contexts/DarkModeContext';
import PlayerContext from '../contexts/PlayerContext';
import Player from './gameplay/Player';

const Main = ({ setCurrentPlayer, palette }) => {
	const [boxValues, setBoxValues] = useState(getNewBoxValues());
	const [markCount, setMarkCount] = useState(0);
	const [winner, setWinner] = useState(null);
	const [showModal, setShowModal] = useState(false);

    const currentPlayer = useContext(PlayerContext);
	const darkMode = useContext(DarkModeContext); // TEMP do I need this here?

	function getNewBoxValues() {
		let newBoxValues = [];

		// Create objects for each square in the grid
		for (let i = 0; i < 9; i++) {
			newBoxValues[i] = { id: i, mark: null, color: getRandomElement(palette) };
		}
		return newBoxValues;
	}

	const createNewGame = () => {
		closeModal();
		setWinner(null);
		setBoxValues(getNewBoxValues());
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
			setShowModal(true);
		}
	}, [winner]);

	const handlePlayerMark = id => {
		if (!boxValues[id].mark) {
			let updatedBoxValues = boxValues.map(box => {
				return box.id == id ? { ...box, mark: currentPlayer } : { ...box };
			});
			setBoxValues(updatedBoxValues);
			setMarkCount(markCount + 1);
		}
	};

	return (
		<main className={darkMode ? 'dark-mode' : 'light-mode'}>
			<Grid
				boxValues={boxValues}
				markCell={handlePlayerMark}
			/>
			<Player player={currentPlayer} />
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
