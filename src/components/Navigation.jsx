import { Link } from 'react-router-dom';
function Navigation() {
	return (
		<div className="flex justify-start items-center bg-cobalto py-2 pr-10 pl-8">
			<div className="relative flex justify-between items-center flex-1">
				<Link to="/">
					<img
						className="w-15 h-12"
						src="./src/assets/Imagenes-Optimen/logo optimen blanco.png"
						alt="Logo Optimen"
					/>
				</Link>
				<div>
					<nav className="font-monserrat uppercase text-xs ">
						<Link to="/" className="p-5 tracking-widest text-white opacity-60">
							Home
						</Link>

						<Link
							to="/AboutUs"
							className="p-5 tracking-widest text-white opacity-60"
						>
							About
						</Link>
						<a href="#" className="p-5 tracking-widest text-white opacity-60  ">
							Customers
						</a>
						<a href="#" className="p-5 tracking-widest text-white opacity-60 ">
							News
						</a>
						<a
							href="#"
							className="p-5 text-xs tracking-widest text-white opacity-60 "
						>
							Contact Us
						</a>
					</nav>
				</div>
			</div>
		</div>
	);
}

export default Navigation;
