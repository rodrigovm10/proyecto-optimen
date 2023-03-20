import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../features/auth/authSlice';
import jwtDecode from 'jwt-decode';

const useAuth = () => {
	const token = useSelector(selectCurrentToken);
	let isAdminRoot = false;
	let isAdmin = false;
	let isContentCreator = false;
	let status = 'Creador de Contenido';

	if (token) {
		const decoded = jwtDecode(token);
		const { email, roles, permissions } = decoded.UserInfo;

		isAdminRoot = roles.includes('AdminRoot');
		isAdmin = roles.includes('Admin');
		isContentCreator = roles.includes('ContentCreator');

		if (isAdminRoot) status = 'Admin Root';
		if (isAdmin) status = 'Admin';
		if (isContentCreator) status = 'Content Creator';

		return {
			email,
			roles,
			status,
			isAdminRoot,
			isAdmin,
			isContentCreator,
			permissions,
		};
	}

	return {
		email: '',
		roles: [],
		isAdminRoot,
		isAdmin,
		isContentCreator,
		status,
		permissions: [],
	};
};

export default useAuth;
