import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routesConfig } from './routes/routsConfig';
import './App.css';

const router = createBrowserRouter(routesConfig);

export function App() {
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}
