import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectUserById } from './usersApiSlice';

const Users = ({ userId }) => {
	const user = useSelector(state => selectUserById(state, userId));

	const navigate = useNavigate();

	if (user) {
		const handleEdit = () => navigate(`/AdminView/users/${userId}`);

		const userRolesString = user.roles.toString().replaceAll(',', ', ');

		const cellStatus = user.active ? '' : 'table__cell--inactive';

		return (
			<tr className="table__row user">
				<td
					className={`text-center" border-2 border-azulito px-10 ${cellStatus}`}
				>
					{user.email}
				</td>
				<td
					className={`text-center" border-2 border-azulito px-10 ${cellStatus}`}
				>
					{userRolesString}
				</td>
				<td
					className={`text-center" border-2 border-azulito px-10 ${cellStatus}`}
				>
					<button className="color-white p-1 text-2xl" onClick={handleEdit}>
						<FontAwesomeIcon icon={faPenToSquare} />
					</button>
				</td>
			</tr>
		);
	} else return null;
};
export default Users;
