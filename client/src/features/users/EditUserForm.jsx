import { useState, useEffect } from 'react';
import { useUpdateUserMutation, useDeleteUserMutation } from './usersApiSlice';
import { useAddNewRegisterMutation } from '../register/registerApiSlice';
import { useNavigate } from 'react-router-dom';
import { ROLES } from '../../config/roles';
import NavBar from '../../components/Admin/NavBar';
import useAuth from '../../Hooks/useAuth';

const USER_REGEX = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
const PWD_REGEX = /^[A-z0-9!@#$%]{4,12}$/;

const EditUserForm = ({ userR }) => {
	const { isAdmin, isAdminRoot } = useAuth();
	const auth = useAuth();
	const emailR = auth.email;

	const [updateUser, { isLoading, isSuccess, isError, error }] =
		useUpdateUserMutation();

	const [
		deleteUser,
		{ isSuccess: isDelSuccess, isError: isDelError, error: delerror },
	] = useDeleteUserMutation();

	const [addNewRegister] = useAddNewRegisterMutation();

	const navigate = useNavigate();

	const [moveTypeU, setMoveTypeU] = useState('');
	const [dateTypeU, setDateTypeU] = useState('');
	const [userU, setUserU] = useState();
	const [moveTypeD, setMoveTypeD] = useState('');
	const [dateTypeD, setDateTypeD] = useState('');
	const [userD, setUserD] = useState();
	const [email, setEmail] = useState(userR.email);
	const [validEmail, setValidEmail] = useState(false);
	const [password, setPassword] = useState('');
	const [validPassword, setValidPassword] = useState(false);
	const [roles, setRoles] = useState(userR.roles);
	const [active, setActive] = useState(userR.active);

	useEffect(() => {
		setValidEmail(USER_REGEX.test(email));
	}, [email]);

	useEffect(() => {
		setValidPassword(PWD_REGEX.test(password));
	}, [password]);

	useEffect(() => {
		console.log(isSuccess);
		if (isSuccess || isDelSuccess) {
			setEmail('');
			setPassword('');
			setRoles([]);
			navigate(`${isAdmin ? `/Admin/Profile` : `/AdminRoot/Privileges`}`);
		}
	}, [isSuccess, isDelSuccess, navigate]);

	const onEmailChanged = e => setEmail(e.target.value);
	const onPasswordChanged = e => setPassword(e.target.value);

	const onRolesChanged = e => {
		const values = Array.from(e.target.selectedOptions, option => option.value);
		setRoles(values);
	};

	const onActiveChanged = () => setActive(prev => !prev);

	const date = new Date().toISOString().slice(0, 10);

	useEffect(() => {
		setMoveTypeU('Se actualizó un usuario');
		setDateTypeU(date);
		setUserU(emailR);
	}, [moveTypeU, dateTypeU, userU]);

	useEffect(() => {
		setMoveTypeD('Se eliminó un usuario');
		setDateTypeD(date);
		setUserD(emailR);
	}, [moveTypeD, dateTypeD, userD]);

	const onSaveUserClicked = async e => {
		let moveType = moveTypeU;
		let dateType = dateTypeU;
		let user = userU;
		if (password) {
			await updateUser({ id: userR.id, email, password, roles, active });
			await addNewRegister({ moveType, dateType, user });
		} else {
			await updateUser({ id: userR.id, email, roles, active });
			await addNewRegister({ moveType, dateType, user });
		}
	};

	const onDeleteUserClicked = async () => {
		let moveType = moveTypeD;
		let dateType = dateTypeD;
		let user = userD;
		await deleteUser({ id: userR.id });
		await addNewRegister({ moveType, dateType, user });
	};

	const options = Object.values(ROLES).map(role => {
		return (
			<option key={role} value={role}>
				{role}
			</option>
		);
	});

	let canSave;
	if (password) {
		canSave =
			[roles.length, validEmail, validPassword].every(Boolean) && !isLoading;
	} else {
		canSave = [roles.length, validEmail].every(Boolean) && !isLoading;
	}

	const errClass =
		isError || isDelError
			? 'inline-block text-red p-[0.25em] mb-[0.5em] ml-[20%]'
			: 'offscreen ';
	const validUserClass = !validEmail
		? 'border-2 border-solid border-[#F00]'
		: '';
	const validPwdClass =
		password && !validPassword ? 'border-2 border-solid border-[#F00]' : '';
	const validRolesClass = !Boolean(roles.length)
		? 'border-2 border-solid border-[#F00]'
		: '';

	const errContent = (error?.data?.message || delerror?.data?.message) ?? '';

	const canSaveClass = 'opacity-60 cursor-auto';

	const formAdmin = (
		<>
			<label
				className="text-sm font-medium leading-5 tracking-wide"
				htmlFor="email"
			>
				Email: <span className="nowrap">[3-20 letters]</span>
			</label>
			<input
				className={`border-[rgba(0, 0, 0, 0.16)] h-12 w-full rounded-lg border-[1px] border-solid py-2 px-4 text-[#333333] ${validUserClass}`}
				id="email"
				name="email"
				type="text"
				autoComplete="off"
				value={email}
				onChange={onEmailChanged}
			/>

			<label
				className="text-sm font-medium leading-5 tracking-wide"
				htmlFor="password"
			>
				Password: <span className="whitespace-nowrap">[empty = no change]</span>{' '}
				<span className="whitespace-nowrap">[4-12 chars incl. !@#$%]</span>
			</label>
			<input
				className={`border-[rgba(0, 0, 0, 0.16)] h-12 w-full rounded-lg border-[1px] border-solid py-2 px-4 text-[#333333] ${validPwdClass}`}
				id="password"
				name="password"
				type="password"
				value={password}
				onChange={onPasswordChanged}
			/>
			<label
				className="text-sm font-medium leading-5 tracking-wide"
				htmlFor="user-active"
			>
				Activo:
				<input
					className="h-4 w-4"
					id="user-active"
					name="user-active"
					type="checkbox"
					checked={active}
					onChange={onActiveChanged}
				/>
			</label>
			<div>
				<input
					id={'Submit'}
					name="Submit"
					type="submit"
					title="Delete"
					value="Eliminar"
					disabled={!canSave}
					onClick={onDeleteUserClicked}
					className="w-full cursor-pointer rounded-lg border-[1px] border-solid bg-red-500 p-4 text-center leading-4 text-white"
				/>
			</div>
		</>
	);

	const formAdminRoot = (
		<>
			<label
				className="text-sm font-medium leading-5 tracking-wide"
				htmlFor="roles"
			>
				Privilegios:
			</label>
			<select
				id="roles"
				name="roles"
				className={`w-fit p-[0.25em] ${validRolesClass}`}
				multiple={true}
				size="3"
				value={roles}
				onChange={onRolesChanged}
			>
				{options}
			</select>
		</>
	);

	const formAll = (
		<>
			<label
				className="text-sm font-medium leading-5 tracking-wide"
				htmlFor="email"
			>
				Email: <span className="nowrap">[3-20 letters]</span>
			</label>
			<input
				className={`border-[rgba(0, 0, 0, 0.16)] h-12 w-full rounded-lg border-[1px] border-solid py-2 px-4 text-[#333333] ${validUserClass}`}
				id="email"
				name="email"
				type="text"
				autoComplete="off"
				value={email}
				onChange={onEmailChanged}
			/>

			<label
				className="text-sm font-medium leading-5 tracking-wide"
				htmlFor="password"
			>
				Password: <span className="whitespace-nowrap">[empty = no change]</span>{' '}
				<span className="whitespace-nowrap">[4-12 chars incl. !@#$%]</span>
			</label>
			<input
				className={`border-[rgba(0, 0, 0, 0.16)] h-12 w-full rounded-lg border-[1px] border-solid py-2 px-4 text-[#333333] ${validPwdClass}`}
				id="password"
				name="password"
				type="password"
				value={password}
				onChange={onPasswordChanged}
			/>
			<label
				className="text-sm font-medium leading-5 tracking-wide"
				htmlFor="user-active"
			>
				Activo:
				<input
					className="h-4 w-4"
					id="user-active"
					name="user-active"
					type="checkbox"
					checked={active}
					onChange={onActiveChanged}
				/>
			</label>
			<label
				className="text-sm font-medium leading-5 tracking-wide"
				htmlFor="roles"
			>
				Roles Asignados:
			</label>
			<select
				id="roles"
				name="roles"
				className={`w-fit p-[0.25em] ${validRolesClass}`}
				multiple={true}
				size="3"
				value={roles}
				onChange={onRolesChanged}
			>
				{options}
			</select>
			<div>
				<input
					id={'Submit'}
					name="Submit"
					type="submit"
					title="Delete"
					value="Eliminar"
					disabled={!canSave}
					onClick={onDeleteUserClicked}
					className="w-full cursor-pointer rounded-lg border-[1px] border-solid bg-red-500 p-4 text-center leading-4 text-white"
				/>
			</div>
		</>
	);

	const content = (
		<>
			<NavBar />
			<p className={errClass}>{errContent}</p>

			<form
				className="ml-[22%] flex max-w-[800px] flex-col flex-nowrap gap-[0.75em]"
				onSubmit={e => e.preventDefault()}
			>
				<div className="flex items-center justify-between text-xl font-semibold text-cobalto">
					<h2>{`${
						isAdmin && isAdminRoot
							? `Editar Usuario y Privilegios`
							: isAdmin
							? `Editar Usuario`
							: `Editar Privilegios`
					}`}</h2>
				</div>
				{isAdmin && isAdminRoot ? formAll : isAdmin ? formAdmin : formAdminRoot}
				<input
					id={'Submit'}
					name="Submit"
					type="submit"
					title="Save"
					value="Guardar"
					disabled={!canSave}
					onClick={onSaveUserClicked}
					className="w-full cursor-pointer rounded-lg border-[1px] border-solid bg-cobalto p-4 text-center leading-4 text-white"
				/>
			</form>
		</>
	);

	return content;
};

export default EditUserForm;
