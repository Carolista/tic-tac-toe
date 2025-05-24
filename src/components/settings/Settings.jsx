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
			<Palettes setPalette={setPalette} />
			<div id="dark-mode">
                DARK MODE: 
				<span id="on-off"
					onClick={toggleDarkMode}>
					{darkMode ? 'ON' : 'OFF'}
				</span>
			</div>
		</div>
	);
};

export default Settings;
