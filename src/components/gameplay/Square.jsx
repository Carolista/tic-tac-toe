import { useState, useContext } from 'react';
import PlayerContext from '../../contexts/PlayerContext';

const Square = ({ square, markCell }) => {

    const player = useContext(PlayerContext);

    // Controls animation during hover
	const [showTranslucentMark, setShowTranslucentMark] = useState(false);
    
	const handleMouseEnter = () => {
		if (!square.mark) setShowTranslucentMark(true);
	};

	const handleMouseLeave = () => {
		setShowTranslucentMark(false);
	};

	const handleClick = () => {
		setShowTranslucentMark(false);
		markCell(square.id);
	};

	return (
		<div
			id={square.id}
			className="square"
			style={{ backgroundColor: `#${square.color}` }}
			onClick={handleClick}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			{square.mark && <span className={`${square.mark.toLowerCase()}-mark`}>{square.mark}</span>}
			{showTranslucentMark && (
				<span className={`${player.toLowerCase()}-mark translucent`}>
					{player}
				</span>
			)}
		</div>
	);
};

export default Square;
