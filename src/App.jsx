import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import News from './pages/News';
import Customers from './pages/Customers';
import Login from './pages/Login';
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />}></Route>
				<Route path="/About Us" element={<AboutUs />}></Route>
				<Route path="/Customers" element={<Customers />}></Route>
				<Route path="/Contact Us" element={<ContactUs />}></Route>
				<Route path="/News" element={<News />}></Route>
				<Route path="/Login" element={<Login />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
