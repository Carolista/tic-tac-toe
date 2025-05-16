import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

// TODO: write logic for running game along with win patterns
// TODO: add transitions for hovering over cells
// TODO: add multiple palettes and settings modal
// TODO: add dark mode and light mode to settings modal

function App() {
	const [currentPlayer, setCurrentPlayer ] = useState('X');

	return (
		<div id="window">
			<Header />
			<Main currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} />
			<Footer player={currentPlayer} />
		</div>
	);
}

export default App;
