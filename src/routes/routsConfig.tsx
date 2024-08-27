import { DefaultLayout } from '../layout/DeafultLayout/index';
import { LoginPage } from '../components/pages/LoginPage';
import { SubmitPage } from '../components/pages/SubmitPage/index';
import { ROUTES_PATH } from './routsConstants';

export const routesConfig = [
	{
		element: <DefaultLayout />,
		children: [
			{
				path: ROUTES_PATH.home,
				element: <LoginPage />,
			},
			{
				path: ROUTES_PATH.submit,
				element: <SubmitPage />,
			},
		],
	},
];
