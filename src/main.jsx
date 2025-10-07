import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './global.css';
import { SettingsContextProvider } from './context/SettingsContext.jsx';
import { CurrentPlayerContextProvider } from './context/CurrentPlayerContext.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<SettingsContextProvider>
			<CurrentPlayerContextProvider>
				<App />
			</CurrentPlayerContextProvider>
		</SettingsContextProvider>
	</StrictMode>
);
