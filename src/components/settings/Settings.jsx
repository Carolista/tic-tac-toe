import { useContext } from 'react';
import DarkModeContext from '../../contexts/DarkModeContext';
import Palettes from '../../components/settings/Palettes'; // TEMP

const Settings = ({ setDarkMode }) => {
	const darkMode = useContext(DarkModeContext);

	const componentToHex = c => {
		var hex = c.toString(16);
		return hex.length == 1 ? '0' + hex : hex;
	};

	const rgbToHex = rgb => {
		// Parse rgb as string of code to get individual values
		let paren1 = rgb.indexOf('(');
		let comma1 = rgb.indexOf(',');
		let r = Number(rgb.slice(paren1 + 1, comma1));
		rgb = rgb.slice(comma1 + 1); // reassign rest of string
		let comma2 = rgb.indexOf(',');
		let paren2 = rgb.indexOf(')');
		let g = Number(rgb.slice(0, comma2));
		let b = Number(rgb.slice(comma2 + 1, paren2));
		// convert and concatenate to hex code (without #)
		return `${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
	};

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
			<Palettes />
		</div>
	);
};

export default Settings;
