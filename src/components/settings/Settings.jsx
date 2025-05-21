import { useContext } from 'react';
import DarkModeContext from '../../contexts/DarkModeContext';
import Palettes from '../../components/settings/Palettes';

const Settings = ({ setPalette, setDarkMode }) => {
	const darkMode = useContext(DarkModeContext);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	return (
		<div id="settings" className={darkMode ? 'dark-mode' : 'light-mode'}>
			<button
				id="dark-mode"
				className={darkMode ? 'dark-mode' : 'light-mode'}
				onClick={toggleDarkMode}>
				DARK MODE: {darkMode ? 'ON' : 'OFF'}
			</button>
			<Palettes setPalette={setPalette} />
		</div>
	);
};

export default Settings;
