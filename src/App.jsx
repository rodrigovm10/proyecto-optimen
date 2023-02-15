import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />}></Route>
				<Route path="/About Us" element={<AboutUs />}></Route>
				<Route path="/Contact Us" element={<ContactUs />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
