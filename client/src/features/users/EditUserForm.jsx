import { useState, useEffect } from 'react';
import { useUpdateUserMutation, useDeleteUserMutation } from './usersApiSlice';
import { useNavigate } from 'react-router-dom';
import { faSave, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ROLES } from '../../config/roles';

const USER_REGEX = /^[A-z]{3,20}$/;
const PWD_REGEX = /^[A-z0-9!@#$%]{4,12}$/;

const EditUserForm = ({ user }) => {
	const [updateUser, { isLoading, isSuccess, isError, error }] =
		useUpdateUserMutation();

	const [
		deleteUser,
		{ isSuccess: isDelSuccess, isError: isDelError, error: delerror },
	] = useDeleteUserMutation();

	const navigate = useNavigate();

	const [email, setEmail] = useState(user.email);
	const [validEmail, setValidEmail] = useState(false);
	const [password, setPassword] = useState('');
	const [validPassword, setValidPassword] = useState(false);
	const [roles, setRoles] = useState(user.roles);
	const [active, setActive] = useState(user.active);

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
			navigate('/AdminView/Profile');
		}
	}, [isSuccess, isDelSuccess, navigate]);

	const onEmailChanged = e => setEmail(e.target.value);
	const onPasswordChanged = e => setPassword(e.target.value);

	const onRolesChanged = e => {
		const values = Array.from(e.target.selectedOptions, option => option.value);
		setRoles(values);
	};

	const onActiveChanged = () => setActive(prev => !prev);

	const onSaveUserClicked = async e => {
		if (password) {
			await updateUser({ id: user.id, email, password, roles, active });
		} else {
			await updateUser({ id: user.id, email, roles, active });
		}
	};

	const onDeleteUserClicked = async () => {
		await deleteUser({ id: user.id });
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
			? 'inline-block text-red p-[0.25em] mb-[0.5em]'
			: 'offscreen';
	const validUserClass = !validEmail
		? 'border-2 border-solid border-[#F00]'
		: '';
	const validPwdClass =
		password && !validPassword ? 'border-2 border-solid border-[#F00]' : '';
	const validRolesClass = !Boolean(roles.length)
		? 'border-2 border-solid border-[#F00]'
		: '';

	const errContent = (error?.data?.message || delerror?.data?.message) ?? '';

	const content = (
		<>
			<p className={errClass}>{errContent}</p>

			<form
				className="flex max-w-[800px] flex-col flex-nowrap gap-[0.75em]"
				onSubmit={e => e.preventDefault()}
			>
				<div className="flex items-center justify-between">
					<h2>Edit User</h2>
					<div className="absolute right-[0.5em] flex items-center justify-end gap-[0.5em]">
						<button
							className="grid h-[48px] w-[48px] place-content-center border-none bg-transparent text-xl text-white"
							title="Save"
							onClick={onSaveUserClicked}
							disabled={!canSave}
						>
							<FontAwesomeIcon icon={faSave} />
						</button>
						<button
							className="grid h-[48px] w-[48px] place-content-center border-none bg-transparent text-xl text-white"
							title="Delete"
							onClick={onDeleteUserClicked}
						>
							<FontAwesomeIcon icon={faTrashCan} />
						</button>
					</div>
				</div>
				<label className="form__label" htmlFor="username">
					Username: <span className="nowrap">[3-20 letters]</span>
				</label>
				<input
					className={`rounded-2xl p-[0.5em] ${validUserClass}`}
					id="username"
					name="username"
					type="text"
					autoComplete="off"
					value={email}
					onChange={onEmailChanged}
				/>

				<label className="form__label" htmlFor="password">
					Password:{' '}
					<span className="whitespace-nowrap">[empty = no change]</span>{' '}
					<span className="whitespace-nowrap">[4-12 chars incl. !@#$%]</span>
				</label>
				<input
					className={`border-[rgba(0, 0, 0, 0.16)] mb-8 h-12 w-full rounded-lg border-[1px] border-solid py-2 px-4 text-[#333333] ${validPwdClass}`}
					id="password"
					name="password"
					type="password"
					value={password}
					onChange={onPasswordChanged}
				/>

				<label
					className="form__label form__checkbox-container"
					htmlFor="user-active"
				>
					ACTIVE:
					<input
						className="h-6 w-6"
						id="user-active"
						name="user-active"
						type="checkbox"
						checked={active}
						onChange={onActiveChanged}
					/>
				</label>

				<label className="form__label" htmlFor="roles">
					ASSIGNED ROLES:
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
			</form>
		</>
	);

	return content;
};

export default EditUserForm;
