import { Suspense, lazy } from 'react';
const Navigation = lazy(() => import('../components/Navigation'));
const Footer = lazy(() => import('../components/Footer'));
const HeroAbout = lazy(() => import('../components/AboutUs/HeroAbout'));
const FirstSection = lazy(() => import('../components/AboutUs/FirstSection'));
const SecondSection = lazy(() => import('../components/AboutUs/SecondSection'));
const ThirdSection = lazy(() => import('../components/AboutUs/ThirdSection'));
const FourthSection = lazy(() => import('../components/AboutUs/FourthSection'));
const FifthSection = lazy(() => import('../components/AboutUs/FifthSection'));

function AboutUs() {
	return (
		<div className="overflow-x-hidden">
			<Suspense>
				<Navigation />
			</Suspense>
			<Suspense>
				<HeroAbout
					title="What is Optimen?"
					description="Optimen is a Mexican Software Development company that provides resources management and optimization services to different industries. The company was designated and approved as an International Service Contractor for Jeppesen and Boeing."
				/>
			</Suspense>
			<Suspense>
				<FirstSection />
			</Suspense>
			<Suspense>
				<SecondSection />
			</Suspense>
			<Suspense>
				<ThirdSection />
			</Suspense>
			<Suspense>
				<FourthSection />
			</Suspense>
			<Suspense>
				<FifthSection />
			</Suspense>
			<Suspense>
				<Footer />
			</Suspense>
		</div>
	);
}

export default AboutUs;
