import { Link } from 'react-router';
import './about.css';
import Spacer from '../shared/Spacer';

const About = () => {
	return (
		<div id="about-content" className="align-middle">
			<h2>Welcome</h2>
			<p>
				Grab a friend and{' '}
				<Link to="/" className="link">
					play a quick game
				</Link>{' '}
				of Tic-Tac-Toe! The first person to get three-in-a-row (vertically,
				horizontally, or diagonally) wins the game.
			</p>
			<p className="bold">What do those icons below the game board do?</p>
			<table>
				<tbody>
					<tr>
						<td>
							<i className="fa-solid fa-gear fa-xxl"></i>
						</td>
						<td>
							Customize the look of your game! Choose from a
							variety of color themes and also toggle between dark mode and
							light mode.
						</td>
					</tr>
					<tr>
						<td>
							<i className="fa-solid fa-circle-question fa-xxl"></i>
						</td>
						<td>That's how you probably got to this very page!</td>
					</tr>
					<tr>
						<td>
							<i className="fa-solid fa-chart-simple fa-xxl"></i>
						</td>
						<td>
							See your stats — how many games you've played, how many times
							different players won, etc.
						</td>
					</tr>
				</tbody>
			</table>
			<Spacer height="20px" />
			<h2>
				<Link to="/">Play now!</Link>
			</h2>
		</div>
	);
};

export default About;
