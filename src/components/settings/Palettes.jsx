import { palettes } from '../../shared/colors';
import Palette from './Palette';

const Palettes = ({ setPalette }) => {
	const palettesJSX = palettes.map((palette, i) => {
		return <Palette key={i} id={i} palette={palette} setPalette={setPalette} />;
	});

	return <div id="palettes">{palettesJSX}</div>;
};

export default Palettes;
