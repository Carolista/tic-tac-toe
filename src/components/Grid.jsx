import { useState } from 'react';
import Box from './Box';

let rowBasis = [0, 1, 2];
let cellBasis = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
];

const Grid = () => {
	let [playerMarks, setPlayerMarks] = useState({
		0: null,
		1: null,
		2: "X",
		3: null,
		4: "O",
		5: "O",
		6: null,
		7: null,
		8: null,
	});

	const gridJSX = rowBasis.map(i => {
		return (
			<div key={`row-${i}`} className={`row row-${i}`}>
				{rowBasis.map(j => {
                    let cellNum = cellBasis[i][j];
					let id = `cell-${cellNum}`;
					return <Box key={id} id={id} mark={playerMarks[cellNum]} />;
				})}
			</div>
		);
	});

	return <div id="grid">{gridJSX}</div>;
};

export default Grid;
