import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

function App() {
	const [currentPlayer, setCurrentPlayer] = useState('X');

	return (
		<div id="window">
			<Header />
			<Main />
			<Footer player={currentPlayer} />
		</div>
	);
}

export default App;
