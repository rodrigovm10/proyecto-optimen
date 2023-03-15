import { Suspense, lazy } from 'react';
const Navigation = lazy(() => import('../components/Navigation'));
const Footer = lazy(() => import('../components/Footer'));
const Hero = lazy(() => import('../components/Home/HeroHome'));
const Slider = lazy(() => import('../components/Home/Slider'));
const FirstSection = lazy(() => import('../components/Home/FirstSection'));
const SecondSection = lazy(() => import('../components/Home/SecondSection'));
import { useTranslation } from 'react-i18next';

function Home() {
	const [t, i18n] = useTranslation('global');

	return (
		<>
			<div className="overflow-x-hidden">
				<Suspense>
					<Navigation />
					<Hero
						title={t('home.hero.title')}
						description={t('home.hero.description')}
					/>
					<Slider />
					<FirstSection />
					<SecondSection />
					<Footer />
				</Suspense>
			</div>
		</>
	);
}

export default Home;
