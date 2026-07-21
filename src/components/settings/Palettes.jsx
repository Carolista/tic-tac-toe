import { palettes } from '@shared/colors';
import Palette from './Palette';

const Palettes = ({ closeModal }) => {
	const palettesJSX = palettes.map((palette, i) => {
		return (
			<Palette key={i} id={i} palette={palette} closeModal={closeModal} />
		);
	});

	return <div className='settings__palettes'>{palettesJSX}</div>;
};

export default Palettes;
