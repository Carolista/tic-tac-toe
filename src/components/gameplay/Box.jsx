import { useState, useContext } from 'react';
import PlayerContext from '../../contexts/PlayerContext';

const Box = ({ box, markCell }) => {

    // Controls animation during hover
	const [showTranslucentMark, setShowTranslucentMark] = useState(false);
    const player = useContext(PlayerContext);

	const handleMouseEnter = () => {
		if (!box.mark) setShowTranslucentMark(true);
	};

	const handleMouseLeave = event => {
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
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
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
