import NavBar from './NavBar';
function AddUsers() {
	return (
		<>
			<NavBar />
			<div className="ml-[18%] flex items-center justify-center font-monserrat">
				<div className="mt-6 mr-auto mb-0 ml-auto w-[388px] max-w-full rounded-xl border-2 border-red-500 bg-white p-6 shadow-sombra2">
					<form className="grid">
						<label
							for={'Email'}
							className="mb-3 text-xs font-medium uppercase leading-5 tracking-widest"
						>
							Email
						</label>
						<input
							type="email"
							id={'Email'}
							name={'Email'}
							className="border-[rgba(0, 0, 0, 0.16)] mb-8 inline-block h-12 w-full rounded-lg border-[1px] border-solid py-2 px-4 text-[#333333]"
						/>
						<input type="radio" id={'Admin'} name={'role'} />
						<label
							className="mb-3 text-xs font-medium uppercase leading-5 tracking-widest"
							for={'Admin'}
						>
							Administrador
						</label>
						<input type="radio" id={'CreadorContenido'} name={'role'} />
						<label
							className="mb-3 text-xs font-medium uppercase leading-5 tracking-widest"
							for={'CreadorContenido'}
						>
							Creador de Contenido
						</label>
					</form>
				</div>
			</div>
		</>
	);
}

export default AddUsers;
