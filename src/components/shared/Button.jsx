import { useContext } from 'react';
import DarkModeContext from '../../contexts/DarkModeContext';

const Button = ({ id, text, handleClick }) => {
	const darkMode = useContext(DarkModeContext);

	return (
		<button
			id={id}
			onClick={handleClick}>
			{text}
		</button>
	);
};

export default Button;
