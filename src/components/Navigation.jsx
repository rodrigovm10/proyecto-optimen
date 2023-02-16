import { Link } from 'react-router-dom';
function Navigation() {
	return (
		<div className="flex items-center justify-start bg-cobalto py-2 pr-10 pl-8">
			<div className="relative flex flex-1 items-center justify-between">
				<Link to="/">
					<img
						className="w-15 h-12"
						src="./src/assets/Imagenes-Optimen/logo optimen blanco.png"
						alt="Logo Optimen"
					/>
				</Link>
				<div>
					<nav className="font-monserrat text-xs uppercase ">
						<Link to="/" className="p-5 tracking-widest text-white opacity-60">
							Home
						</Link>

						<Link
							to="/About Us"
							className="p-5 tracking-widest text-white opacity-60"
						>
							About
						</Link>
						<Link
							to="/Customers"
							className="p-5 tracking-widest text-white opacity-60  "
						>
							Customers
						</Link>
						<Link
							to="/News"
							className="p-5 tracking-widest text-white opacity-60 "
						>
							News
						</Link>
						<Link
							to="/Contact Us"
							className="p-5 text-xs tracking-widest text-white opacity-60 "
						>
							Contact Us
						</Link>
					</nav>
				</div>
			</div>
		</div>
	);
}

export default Navigation;
