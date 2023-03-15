import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectRegisterById } from './registerApiSlice';

const Register = ({ registerId }) => {
	const register = useSelector(state => selectRegisterById(state, registerId));

	if (register) {
		return (
			<tr className="table__row register">
				<td className={`text-center" border-2 border-azulito px-10`}>
					{register.moveType}
				</td>
				<td className={`text-center" border-2 border-azulito px-10`}>
					{register.dateType}
				</td>
				<td className={`text-center" border-2 border-azulito px-10`}>
					{register.user}
				</td>
			</tr>
		);
	} else return null;
};

export default Register;
