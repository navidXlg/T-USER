import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@atoms': '/src/components/atoms',
			'@molecules': '/src/components/molecules',
			'@organism': '/src/components/organism',
			'@pages': '/src/components/pages',
		},
	},
});
