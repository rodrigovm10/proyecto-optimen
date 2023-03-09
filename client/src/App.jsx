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
import EditUser from './features/users/EditUser';
import NewUserForm from './features/users/NewUserForm';
import Prefetch from './features/auth/Prefetch';
import PersistLogin from './features/auth/PersistLogin';
import RequireAuth from './features/auth/RequireAuth';
import { ROLES } from './config/roles';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* Rutas de la vista principal */}
				<Route index element={<Home />}></Route>
				<Route path="/About Us" element={<AboutUs />}></Route>
				<Route path="/Customers" element={<Customers />}></Route>
				<Route path="/Contact Us" element={<ContactUs />}></Route>
				<Route path="/News" element={<News />}></Route>
				<Route path="/Login" element={<Login />}></Route>

				<Route element={<PersistLogin />}>
					<Route
						element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />}
					>
						<Route element={<Prefetch />}>
							{/* Rutas de la vista creador de contenido */}
							<Route
								element={<RequireAuth allowedRoles={[ROLES.ContentCreator]} />}
							>
								<Route
									path="/ContentCreatorView"
									element={<ContentCreatorView />}
								></Route>
							</Route>
							{/* Rutas de la vista de administrador */}
							<Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
								<Route path="AdminView">
									<Route index element={<AdminView />} />
									<Route path="AddUsers" element={<AddUsers />} />
									<Route path="UpdatesRegister" element={<UpdatesRegister />} />
									<Route path="Profile" element={<Profile />} />

									<Route path="New" element={<NewUserForm />} />
									<Route path="users">
										<Route path=":id" element={<EditUser />} />
									</Route>
								</Route>
							</Route>
							<Route element={<RequireAuth allowedRoles={[ROLES.AdminRoot]} />}>
								<Route path="AdminView/Privileges" element={<Privileges />} />
							</Route>
						</Route>
						{/*Prefetch */}
					</Route>
					{/* Require Auth */}
				</Route>
				{/*Persist Login */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
