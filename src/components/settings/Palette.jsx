import { useState, useContext, useEffect } from 'react';
import DarkModeContext from '../../contexts/DarkModeContext';
import PaletteContext from '../../contexts/PaletteContext';

const Palette = ({ id, palette, setPalette }) => {
	const darkMode = useContext(DarkModeContext);
	const selectedPalette = useContext(PaletteContext);

	const [borderClass, setBorderClass] = useState('');

	const handleChangePalette = () => {
		setPalette(palette);
	};

	useEffect(() => {
		if (selectedPalette == palette) {
			setBorderClass(darkMode ? 'border-dark' : 'border-light');
		} else {
			setBorderClass('');
		}
	}, [selectedPalette, darkMode]);

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
			onClick={handleChangePalette}>
			{paletteJSX}
		</div>
	);
};

export default Palette;
