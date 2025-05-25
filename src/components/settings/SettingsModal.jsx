import { useState, useContext } from 'react';
import DarkModeContext from '../../contexts/DarkModeContext';
import Palettes from './Palettes';
import './settings.css';
import Modal from '../Modal';

const SettingsModal = ({ closeModal }) => {
	const { darkMode, setDarkMode } = useContext(DarkModeContext);

	const [shouldScale, setShouldScale] = useState(false);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	// Had to handle this with JS because .scale-up was
	// causing side effects when browser page was resizing
	const handleMouseEnter = () => {
		setShouldScale(true);
	};
	const handleMouseLeave = () => {
		setShouldScale(false);
	};

	return (
		<Modal id="settings-modal" align={'top'} closeModal={closeModal}>
			<div id="settings-content">
				<div id="dark-mode-toggle">
					DARK MODE: &nbsp;
					<span
						id="on-off"
						className={`${shouldScale && 'scale-up'}`}
						onClick={toggleDarkMode}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}>
						{darkMode ? 'ON' : 'OFF'}
					</span>
				</div>
				<Palettes />
			</div>
		</Modal>
	);
};

export default SettingsModal;
