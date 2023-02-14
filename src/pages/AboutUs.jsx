import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HeroAbout from '../components/AboutUs/HeroAbout';
import FirstSection from '../components/AboutUs/FirstSection';
import SecondSection from '../components/AboutUs/SecondSection';
function AboutUs() {
	return (
		<div className="overflow-x-hidden">
			<Navigation />
			<HeroAbout
				title="What is Optimen?"
				description="Optimen is a Mexican Software Development company that provides resources management and optimization services to different industries. The company was designated and approved as an International Service Contractor for Jeppesen and Boeing."
			/>
			<FirstSection />
			<SecondSection />
			<Footer />
		</div>
	);
}

export default AboutUs;
