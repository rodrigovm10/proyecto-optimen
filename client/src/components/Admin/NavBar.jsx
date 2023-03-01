import Links from './Links';
function NavBar() {
	return (
		<>
			<div className="fixed m-0 h-[100%] w-[20%] overflow-auto bg-cobalto p-0 text-center">
				<Links to="/AdminView" name="Inicio"></Links>
				<Links
					to="/AdminView/UpdatesRegister"
					name="Registro de Actualizaciones"
				/>
				<Links to="/AdminView/Profile" name="Perfiles" />
				<Links to="/AdminView/AddUsers" name="Añadir Usuarios" />
				<Links to="/AdminView/Privileges" name="Permisos" />
				<Links to="/Login" name="Salir" />
			</div>
		</>
	);
}

export default NavBar;
