import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';
import Palettes from './components/Palettes';

// TODO: add a game won modal
// TODO: handle a no-win scenario
// TODO: add a settings modal
// TODO: add dark mode and light mode

function App() {
	const [currentPlayer, setCurrentPlayer ] = useState(["X", "O"][Math.floor(Math.random() * 2)]);

	return (
		<div id="window">
			<Header />
			<Main currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} />
			<Footer player={currentPlayer} />
            <Palettes />
		</div>
	);
}

export default App;
