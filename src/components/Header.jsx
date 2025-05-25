import { useContext } from 'react';
import DarkModeContext from '../contexts/DarkModeContext';

const Header = () => {
	const { darkMode } = useContext(DarkModeContext);

	return (
		<header>
			<h1>Tic-Tac-Toe</h1>
		</header>
	);
};

export default Header;
