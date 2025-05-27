import './App.css';
import Home from './components/Home.jsx';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';

// POSSIBLE FUTURE UPDATES
// TODO: make some palettes unavailable and
// unlock them at intervals as user plays more games

function App() {
	return (
        <Home />
    )
}

export default App;
