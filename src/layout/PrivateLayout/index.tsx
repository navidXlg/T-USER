import { Outlet } from 'react-router-dom';

export function PrivateLayout() {
	return (
		<div>
			<Outlet />
		</div>
	);
}
