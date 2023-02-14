import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Hero from '../components/Home/HeroHome';
import Slider from '../components/Home/Slider';
import FirstSection from '../components/Home/FirstSection';
import SecondSection from '../components/Home/SecondSection';
function Home() {
	return (
		<>
			<div className="overflow-x-hidden">
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
			</div>
		</>
	);
}

export default Home;
