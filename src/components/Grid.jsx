import Box from './Box';

let rowBasis = [0, 1, 2];
let cellBasis = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
];

const Grid = ({ player, boxValues, markCell }) => {

    // Create JSX for grid of 9 boxes
	const gridJSX = rowBasis.map(i => {
		return (
			<div key={`row-${i}`} className={`row row-${i}`}>
				{rowBasis.map(j => {
					let cellNum = cellBasis[i][j];
					return (
						<Box
							key={cellNum}
							box={boxValues[cellNum]}
							player={player}
							markCell={markCell}
						/>
					);
				})}
			</div>
		);
	});

	return <div id="grid">{gridJSX}</div>;
};

export default Grid;
