import { useContext } from 'react';
import { Link } from 'react-router';
import DarkModeContext from '../../contexts/DarkModeContext';

const LinkIcon = ({ to, children }) => {
	const darkMode = useContext(DarkModeContext);

	return (
		<Link to={to}>
			{children}
		</Link>
	);
};

export default LinkIcon;
