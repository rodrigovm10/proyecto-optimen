import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import News from './pages/News';
import Customers from './pages/Customers';
import Login from './pages/Login';
import AdminView from './pages/AdminView';
import ContentCreatorView from './pages/ContentCreatorView';
import UpdatesRegister from './components/Admin/UpdatesRegister';
import AddUsers from './components/Admin/AddUsers';
import Profile from './components/Admin/Profile';
import Privileges from './components/Admin/Privileges';

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
				<Route path="/AdminView" element={<AdminView />}></Route>
				<Route
					path="/ContentCreatorView"
					element={<ContentCreatorView />}
				></Route>
				<Route
					path="/AdminView/UpdatesRegister"
					element={<UpdatesRegister />}
				></Route>
				<Route path="/AdminView/AddUsers" element={<AddUsers />}></Route>
				<Route path="/AdminView/Profile" element={<Profile />}></Route>
				<Route path="/AdminView/Privileges" element={<Privileges />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
