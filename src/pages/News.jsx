import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Suspense, lazy } from 'react';
const NewsContainer = lazy(() => import('../components/News/NewsContainer'));
const HeroNews = lazy(() => import('../components/News/HeroNews'));

function News() {
	return (
		<div className="bg-[#f5f7fa]">
			<Navigation />
			<Suspense>
				<HeroNews />
			</Suspense>
			<Suspense>
				<NewsContainer />
			</Suspense>
			<Footer />
		</div>
	);
}

export default News;
