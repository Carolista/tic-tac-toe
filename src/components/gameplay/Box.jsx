import { useState } from 'react';

const Box = ({ player, box, markCell }) => {

    // Controls animation during hover
	const [showTranslucentMark, setShowTranslucentMark] = useState(false);

	const handlePlayerMouseEnter = () => {
		if (!box.mark) setShowTranslucentMark(true);
	};

	const handlePlayerMouseLeave = event => {
		setShowTranslucentMark(false);
	};

	const handleClick = () => {
		setShowTranslucentMark(false);
		markCell(box.id);
	};

	return (
		<div
			id={box.id}
			className="box"
			style={{ backgroundColor: `#${box.color}` }}
			onClick={handleClick}
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
