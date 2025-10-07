import { useState, useEffect, use } from 'react';
import { SettingsContext } from '../../context/SettingsContext.jsx';

const Palette = ({ id, palette, closeModal }) => {
	const { darkMode, currentPalette, setCurrentPalette } = use(SettingsContext);

	const [borderClass, setBorderClass] = useState('');

	const handleChangePalette = () => {
		setCurrentPalette(palette);
	};

	useEffect(() => {
		if (currentPalette == palette) {
			setBorderClass(darkMode ? 'border-dark' : 'border-light');
		} else {
			setBorderClass('');
		}
	}, [currentPalette, darkMode]);

	const paletteJSX = palette.map((color, i) => {
		return (
			<div
				key={i}
				className="color"
				style={{ backgroundColor: `#${color}` }}></div>
		);
	});

	return (
		<div
			id={`palette-${id}`}
			className={`palette ${borderClass}`}
			onClick={handleChangePalette}
			onDoubleClick={closeModal}>
			{paletteJSX}
		</div>
	);
};

export default Palette;
