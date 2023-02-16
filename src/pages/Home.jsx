import { Suspense, lazy } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const Hero = lazy(() => import('../components/Home/HeroHome'));
const Slider = lazy(() => import('../components/Home/Slider'));
const FirstSection = lazy(() => import('../components/Home/FirstSection'));
const SecondSection = lazy(() => import('../components/Home/SecondSection'));
function Home() {
	return (
		<>
			<div className="overflow-x-hidden">
				<Navigation />
				<Suspense>
					<Hero
						title="Welcome to Optimen"
						description="Unique team of Resorces Managment an Optimization Experts and
							passionate Software Delevopers."
					/>
				</Suspense>
				<Suspense>
					<Slider />
				</Suspense>
				<Suspense>
					<FirstSection />
				</Suspense>
				<Suspense>
					<SecondSection />
				</Suspense>
				<Footer />
			</div>
		</>
	);
}

export default Home;
