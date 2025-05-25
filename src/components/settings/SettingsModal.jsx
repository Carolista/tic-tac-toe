import { useContext } from 'react';
import DarkModeContext from '../../contexts/DarkModeContext';
import Palettes from './Palettes';
import './settings.css';
import Modal from '../shared/Modal';

const SettingsModal = ({ setPalette, setDarkMode, closeModal }) => {
	const darkMode = useContext(DarkModeContext);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	return (
		<Modal id="settings-modal" closeModal={closeModal}>
			<Palettes setPalette={setPalette} />
			<div id="dark-mode">
				DARK MODE:
				<span id="on-off" onClick={toggleDarkMode}>
					{darkMode ? 'ON' : 'OFF'}
				</span>
			</div>
		</Modal>
	);
};

export default SettingsModal;
