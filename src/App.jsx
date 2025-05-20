import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';
import Palettes from './components/Palettes'; // TEMP

// TODO: add a settings modal
// TODO: add dark mode and light mode
// TODO: let player choose a color palette
// TODO: make some palettes unavailable and 
// unlock them at intervals as user plays more games

function App() {
	const [currentPlayer, setCurrentPlayer ] = useState(["X", "O"][Math.floor(Math.random() * 2)]);

	return (
		<div id="window">
			<Header />
			<Main currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} />
			<Footer player={currentPlayer} />
            {/* <Palettes /> TEMP for testing */}
		</div>
	);
}

export default App;
