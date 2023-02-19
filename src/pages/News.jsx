import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import NewsContainer from '../components/News/NewsContainer';
import HeroNews from '../components/News/HeroNews';
function News() {
	return (
		<div className="bg-[#f5f7fa]">
			<Navigation />
			<HeroNews />
			<NewsContainer />
			<Footer />
		</div>
	);
}

export default News;
