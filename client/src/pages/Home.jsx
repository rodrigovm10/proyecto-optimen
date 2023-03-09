import { Suspense, lazy } from 'react';
const Navigation = lazy(() => import('../components/Navigation'));
const Footer = lazy(() => import('../components/Footer'));
const Hero = lazy(() => import('../components/Home/HeroHome'));
const Slider = lazy(() => import('../components/Home/Slider'));
const FirstSection = lazy(() => import('../components/Home/FirstSection'));
const SecondSection = lazy(() => import('../components/Home/SecondSection'));

function Home() {
	return (
		<>
			<div className="overflow-x-hidden">
				<Suspense>
					<Navigation />
					<Hero
						title="Welcome to Optimen"
						description="Unique team of Resorces Managment an Optimization Experts and
							passionate Software Delevopers."
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
