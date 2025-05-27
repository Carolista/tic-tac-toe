import { palettes } from '../../common/colors';
import Palette from './Palette';

const Palettes = () => {
	const palettesJSX = palettes.map((palette, i) => {
		return <Palette key={i} id={i} palette={palette} />;
	});

	return <div id="palettes">{palettesJSX}</div>;
};

export default Palettes;
