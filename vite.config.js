import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	base: './',
	resolve: {
		alias: {
			'@common': '/src/components/common',
			'@context': '/src/context',
			'@shared': '/src/shared',
		},
	},
});
