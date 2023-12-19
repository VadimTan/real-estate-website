import { Loader } from '../common/Loader';
import { Footer } from '../components/Footer';
import { Main } from '../components/Main';
import { Nav } from '../components/Nav';
import { Suspense } from 'react';
export const MainPage = () => {
	return (
		<>
			<Nav />
			<Suspense fallback={<Loader />}>
				<Main />
			</Suspense>
			<Footer />
		</>
	);
};
