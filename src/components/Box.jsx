import { palette } from '../shared/colors';
import { getRandomElement } from '../shared/utils';

const Box = ({ id, mark }) => {
	let randomColor = getRandomElement(palette);

	return (
		<div id={id} className="box" style={{ backgroundColor: `${randomColor}` }}>
			{mark && <span className={`${mark.toLowerCase()}-mark`}>{mark}</span>}
		</div>
	);
};

export default Box;
