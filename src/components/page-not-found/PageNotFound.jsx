import { Link } from 'react-router';
import './pageNotFound.css';

const PageNotFound = () => {
	return (
		<div id="page-not-found-content" className="align-middle">
			<h2>Oops!</h2>
			<p>There are no games to be found here.</p>
			<p>Try going <Link to="/">here</Link> instead!</p>
		</div>
	);
};

export default PageNotFound;
