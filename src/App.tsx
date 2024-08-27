import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import { DefaultLayout } from './layout/DeafultLayout';

const routes = createBrowserRouter([
	{
		element: <DefaultLayout />,
		children: [
			{
				path: '',
				element: <LoginPage />,
			},
		],
	},
]);

export function App() {
	return <div>our new react applications!</div>;
}
