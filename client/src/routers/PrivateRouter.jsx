import { Route } from 'react-router-dom';
function PrivateRoute(props) {
	return <Route {...props}></Route>;
}

export default PrivateRoute;
