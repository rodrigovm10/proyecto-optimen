import Links from './Links';
import { useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom ';

import { useSendLogoutMutation } from '../../features/auth/authApiSlice';

const ADMIN_REGEX = /^\/AdminView(\/)?$/;
const USERS_REGEX = /^\/AdminView\/users(\/)?$/;

function NavBar() {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const [sendLogout, { isLoading, isSuccess, isError, error }] =
		useSendLogoutMutation();

	useEffect(() => {
		if (isSuccess) navigate('/Login');
	}, [isSuccess, navigate]);

	const onLogoutClicked = () => sendLogout();

	if (isLoading) return <p>Logging Out...</p>;

	if (isError) return <p>Error: {error.data?.message}</p>;

	let dashClass = null;
	if (!ADMIN_REGEX.test(pathname) && !USERS_REGEX.test(pathname)) {
		dashClass = 'max-w-[800px]';
	}

	const logoutButton = (
		<button
			className="text-[#dadada] hover:opacity-80"
			title="Logout"
			onClick={sendLogout}
		>
			Salir
		</button>
	);

	return (
		<>
			<div className="fixed m-0 h-[100%] w-[20%] overflow-auto bg-cobalto p-0 text-center">
				<Links to="/AdminView" name="Inicio"></Links>
				<Links
					to="/AdminView/UpdatesRegister"
					name="Registro de Actualizaciones"
				/>
				<Links to="/AdminView/Profile" name="Perfiles" />
				<Links to="/AdminView/AddUsers" name="Añadir Usuarios" />
				<Links to="/AdminView/Privileges" name="Permisos" />
				{logoutButton}
			</div>
		</>
	);
}

export default NavBar;
