import { Suspense, lazy } from 'react';
const Navigation = lazy(() => import('../components/Navigation'));
const Footer = lazy(() => import('../components/Footer'));
const NewsContainer = lazy(() => import('../components/News/NewsContainer'));
const HeroNews = lazy(() => import('../components/News/HeroNews'));

function News() {
	return (
		<div className="bg-[#f5f7fa]">
			<Suspense>
				<Navigation />
			</Suspense>
			<Suspense>
				<HeroNews />
			</Suspense>
			<Suspense>
				<NewsContainer />
			</Suspense>
			<Suspense>
				<Footer />
			</Suspense>
		</div>
	);
}

export default News;
