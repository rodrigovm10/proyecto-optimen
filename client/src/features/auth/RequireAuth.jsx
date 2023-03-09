import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const RequireAuth = ({ allowedRoles }) => {
	const location = useLocation();
	const { roles } = useAuth();

	const content = roles.some(role => allowedRoles.includes(role)) ? (
		<Outlet />
	) : (
		<Navigate to="/Login" state={{ from: location }} replace />
	);

	return content;
};

export default RequireAuth;
