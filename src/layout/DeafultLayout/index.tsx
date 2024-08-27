import { Outlet } from 'react-router-dom';

export function DefaultLayout() {
	return (
		<main className="w-full h-full">
			<section>
				<Outlet />
			</section>
		</main>
	);
}
