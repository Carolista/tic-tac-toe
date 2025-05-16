import { useState } from 'react';
import { palette } from '../shared/colors';
import { getRandomElement } from '../shared/utils';

const Box = ({ id, player, mark, markCell }) => {
	let [showTranslucentMark, setShowTranslucentMark] = useState(false);

	let randomColor = getRandomElement(palette);

	const handlePlayerMouseEnter = event => {
		if (!event.target.innerHTML) setShowTranslucentMark(true);
	};

	const handlePlayerMouseLeave = event => {
		setShowTranslucentMark(false);
	};

	const handleClick = id => {
		setShowTranslucentMark(false);
		markCell(id);
	};

	return (
		<div
			id={id}
			className="box"
			style={{ backgroundColor: `${randomColor}` }}
			onClick={() => handleClick(id)}
			onMouseEnter={handlePlayerMouseEnter}
			onMouseLeave={handlePlayerMouseLeave}>
			{mark && <span className={`${mark.toLowerCase()}-mark`}>{mark}</span>}
			{showTranslucentMark && (
				<span className={`${player.toLowerCase()}-mark translucent`}>
					{player}
				</span>
			)}
		</div>
	);
};

export default Box;
