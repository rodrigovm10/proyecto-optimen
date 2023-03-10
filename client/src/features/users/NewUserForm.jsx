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
			navigate('/Admin/Profile');
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
		? 'inline-block text-red-500 mb-[0.5em] font-semibold text-xl text-center'
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

	const canSaveClass = 'opacity-60 cursor-auto';

	const content = (
		<>
			<NavBar />
			<form
				className="ml-[22%] flex max-w-[800px] flex-col flex-nowrap justify-center gap-[0.75em] overflow-hidden font-monserrat"
				onSubmit={onSaveUserClicked}
			>
				<div className="flex items-center justify-between text-xl font-semibold text-cobalto">
					<h2>Nuevo Usuario</h2>
				</div>
				<label
					htmlFor="email"
					className="text-sm font-medium leading-5 tracking-wide"
				>
					Email: <span className="whitespace-nowrap">[Correo de Optimen]</span>
				</label>
				<input
					className={`border-[rgba(0, 0, 0, 0.16)] h-12 w-full rounded-lg border-[1px] border-solid py-2 px-4 text-[#333333] ${validUserClass}`}
					type="email"
					id="email"
					name="email"
					value={email}
					onChange={onEmailChanged}
				/>
				<label
					htmlFor="password"
					className="text-sm font-medium leading-5 tracking-wide"
				>
					Password:{' '}
					<span className="whitespace-nowrap">
						[4-12 car??cteres incl. !@#$%]
					</span>
				</label>
				<input
					className={`border-[rgba(0, 0, 0, 0.16)] h-12 w-full rounded-lg border-[1px] border-solid py-2 px-4 text-[#333333] ${validPwdClass}`}
					type="password"
					id="password"
					name="password"
					value={password}
					onChange={onPasswordChanged}
				/>
				<label
					className="text-sm font-medium leading-5 tracking-wide"
					htmlFor="roles"
				>
					Roles:
				</label>
				<select
					className={`w-fit p-[0.25em] ${validRolesClass}`}
					type="password"
					id="roles"
					name="roles"
					multiple={false}
					size="3"
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
					value={'Guardar'}
					disabled={!canSave}
					className={`w-full cursor-pointer rounded-lg border-[1px] border-solid bg-cobalto p-4 text-center leading-4 text-white ${
						!canSave ? canSaveClass : ''
					}`}
				/>
				<p className={`font-monserrat ${errClass}`}>{error?.data?.message}</p>
			</form>
		</>
	);

	return content;
};

export default NewUserForm;
