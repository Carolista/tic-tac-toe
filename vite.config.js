import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	base: './',
	server: { watch: { usePolling: true }, historyApiFallback: true },
	resolve: {
		alias: {
			'@common': path.resolve(__dirname, './src/components/common'),
			'@context': path.resolve(__dirname, './src/context'),
			'@shared': path.resolve(__dirname, './src/shared'),
		},
	},
});
