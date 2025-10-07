import { use } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router';
import Home from './components/Home.jsx';
import About from './components/about/About.jsx';
import PageNotFound from './components/page-not-found/PageNotFound.jsx';
import { SettingsContext } from './context/SettingsContext.jsx';

// POSSIBLE FUTURE UPDATES
// TODO: Make some palettes unavailable and unlock them at intervals as user plays more games
// TODO: Add rotating images in About component to demonstrate win patterns

function App() {
	const { darkMode } = use(SettingsContext);

	return (
		<div id="window" className={darkMode ? 'dark-mode' : 'light-mode'}>
			<HashRouter>
				<Routes>
					<Route path="/" element={<Navigate to="/play" replace />} />
					<Route path="/play" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/*" element={<PageNotFound />} />
				</Routes>
			</HashRouter>
		</div>
	);
}

export default App;
