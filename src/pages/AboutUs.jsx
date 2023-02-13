import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import FirstSection from '../components/AboutUs/FirstSection';
function AboutUs() {
	return (
		<div className="overflow-x-hidden">
			<Navigation />
			<Hero
				title="What is Optimen?"
				description="Optimen is a Mexican Software Development company that provides resources management and optimization services to different industries. The company was designated and approved as an International Service Contractor for Jeppesen and Boeing."
			/>
			<FirstSection />
			<Footer />
		</div>
	);
}

export default AboutUs;
