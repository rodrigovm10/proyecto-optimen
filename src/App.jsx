import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />}></Route>
				<Route path="/AboutUs" element={<AboutUs />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
