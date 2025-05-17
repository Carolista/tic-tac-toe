import { useState } from 'react';

const Box = ({ player, box, markCell }) => {
	const [showTranslucentMark, setShowTranslucentMark] = useState(false);

	const handlePlayerMouseEnter = event => {
		if (!event.target.innerHTML) setShowTranslucentMark(true);
	};

	const handlePlayerMouseLeave = event => {
		setShowTranslucentMark(false);
	};

	const handleClick = id => {
		setShowTranslucentMark(false);
		markCell(box.id);
	};

	return (
		<div
			id={box.id}
			className="box"
			style={{ backgroundColor: `${box.color}` }}
			onClick={() => handleClick(box.id)}
			onMouseEnter={handlePlayerMouseEnter}
			onMouseLeave={handlePlayerMouseLeave}>
			{box.mark && <span className={`${box.mark.toLowerCase()}-mark`}>{box.mark}</span>}
			{showTranslucentMark && (
				<span className={`${player.toLowerCase()}-mark translucent`}>
					{player}
				</span>
			)}
		</div>
	);
};

export default Box;
