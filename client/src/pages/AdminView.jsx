import NavBar from '../components/Admin/NavBar';
function AdminView() {
	return (
		<>
			<NavBar />
			<div className="text-red ml-[25%] flex items-center justify-center">
				<h1 className="mt-60 font-monserrat text-4xl font-semibold text-gris opacity-60">
					Bienvenido a la vista de administrador!
				</h1>
			</div>
		</>
	);
}

export default AdminView;
