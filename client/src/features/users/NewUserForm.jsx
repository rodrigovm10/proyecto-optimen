import { useState, useEffect } from 'react';
import { useAddNewUserMutation } from './usersApiSlice';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { ROLES } from '../../config/roles';
import NavBar from '../../components/Admin/NavBar';

const USER_REGEX = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
const PWD_REGEX = /^[A-z0-9!@#$%]{4,12}$/;

const NewUserForm = () => {
	const [addNewUser, { isLoading, isSuccess, isError, error }] =
		useAddNewUserMutation();

	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [validEmail, setValidEmail] = useState(false);
	const [password, setPassword] = useState('');
	const [validPassword, setValidPassword] = useState(false);
	const [roles, setRoles] = useState(['Admin']);

	useEffect(() => {
		setValidEmail(USER_REGEX.test(email));
	}, [email]);

	useEffect(() => {
		setValidPassword(PWD_REGEX.test(password));
	}, [password]);

	useEffect(() => {
		if (isSuccess) {
			setEmail('');
			setPassword('');
			setRoles([]);
			navigate('/AdminView/Profile');
		}
	}, [isSuccess, navigate]);

	const onEmailChanged = e => setEmail(e.target.value);
	const onPasswordChanged = e => setPassword(e.target.value);

	const onRolesChanged = e => {
		const values = Array.from(e.target.selectedOptions, option => option.value);
		setRoles(values);
	};

	const canSave =
		[roles.length, validEmail, validPassword].every(Boolean) && !isLoading;

	const onSaveUserClicked = async e => {
		e.preventDefault();
		if (canSave) {
			await addNewUser({ email, password, roles });
		}
	};

	const options = Object.values(ROLES).map(role => {
		return (
			<option key={role} value={role}>
				{role}
			</option>
		);
	});

	const errClass = isError
		? 'inline-block text-red p-[0.25em] mb-[0.5em]'
		: 'offscreen';
	const validUserClass = !validEmail
		? 'border-2 border-solid border-[#f00]'
		: '';
	const validPwdClass = !validPassword
		? 'border-2 border-solid border-[#f00]'
		: '';
	const validRolesClass = !Boolean(roles.length)
		? 'border-2 border-solid border-[#f00]'
		: '';

	const content = (
		<>
			<NavBar />
			<p className={errClass}>{error?.data?.message}</p>

			<form
				className="ml-[22%] flex max-w-[800px] flex-col flex-nowrap justify-center gap-[0.75em] overflow-hidden"
				onSubmit={onSaveUserClicked}
			>
				<div className="flex items-center justify-between">
					<h2>Nuevo Usuario</h2>
				</div>
				<label htmlFor="email">
					Email: <span className="whitespace-nowrap">[Correo de Optimen]</span>
				</label>
				<input
					className={`border-[rgba(0, 0, 0, 0.16)] mb-8 h-12 w-full rounded-lg border-[1px] border-solid py-2 px-4 text-[#333333] ${validUserClass}`}
					type="email"
					id="email"
					name="email"
					value={email}
					onChange={onEmailChanged}
				/>
				<label htmlFor="password">
					Password:{' '}
					<span className="whitespace-nowrap">
						[4-12 carácteres incl. !@#$%]
					</span>
				</label>
				<input
					className={`border-[rgba(0, 0, 0, 0.16)] mb-8 h-12 w-full rounded-lg border-[1px] border-solid py-2 px-4 text-[#333333] ${validPwdClass}`}
					type="password"
					id="password"
					name="password"
					value={password}
					onChange={onPasswordChanged}
				/>
				<label htmlFor="roles">Roles:</label>
				<select
					className={`w-fit p-[0.25em] ${validRolesClass}`}
					type="password"
					id="roles"
					name="roles"
					multiple={true}
					size="2"
					value={roles}
					onChange={onRolesChanged}
				>
					{options}
				</select>
				<input
					id={'Submit'}
					name="Submit"
					type="submit"
					title="Save"
					disabled={!canSave}
					className="w-full cursor-pointer rounded-lg border-[1px] border-solid bg-cobalto p-4 text-center leading-4 text-white"
				/>
			</form>
		</>
	);

	return content;
};

export default NewUserForm;
