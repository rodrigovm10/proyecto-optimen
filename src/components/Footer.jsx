import { Link } from 'react-router-dom';
import Nav from './Nav';

function Footer() {
	return (
		<footer className="bg-gris py-10 pr-8 pl-4 relative ">
			<div className="w-full max-w-940 mr-auto ml-auto">
				<div className="flex max-w-900 mr-auto ml-auto justify-between items-start">
					<Link to="/" className="max-w-full inline-block">
						<img
							className="w-56"
							src="./src/assets/Imagenes-Optimen/logo-blanco-azul.png"
							alt="Logo Optimen"
						/>
					</Link>
					<nav className="grid auto-cols-fr gap-x-16 gap-y-10 grid-cols-templateColumns">
						<Nav
							title="Menu"
							link1="Home"
							to1="/"
							link2="About Us"
							to2="/AboutUs"
							link3="Customers"
							link4="News"
							link5="Contact Us"
						/>
						<div className="text-white flex flex-col justify-start items-start text-sm leading-4">
							<p className="opacity-80 font-bold tracking-wider uppercase">
								Location
							</p>
							<p className="opacity-60 mt-3 mb-1">
								Av. León 119 | León, Guanajuato | Mexico
							</p>
							<p className="opacity-60 mt-3 mb-1">Phone: +52 (477) 7173339</p>
							<p className="opacity-60 mt-3 mb-1">Email: info@optimen.com.mx</p>
						</div>
						<Nav
							title="About"
							link1="Carrer"
							link2="Security Policiy"
							link3="Privacy"
						/>
						<div className="flex flex-col gap-y-2 ">
							<Link
								to="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFHzPmjMayzbwAAAYZJd6_QKBLhtRBhAef24qvt9N2esA0LgfTU_8UZnxba3jTbRVU7Fla2zb3XBw98MxQSqPCthbjIR5hESUzaZ_m0YX6MqKVgV_xYU5xaUDGTMJmuvc8F3r0=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Foptimen-sc"
								target={'_blank'}
							>
								<ion-icon name="logo-linkedin" size="large"></ion-icon>
							</Link>
							<Link to="https://www.facebook.com/optimen.mx/" target={'_blank'}>
								<ion-icon name="logo-facebook" size="large"></ion-icon>
							</Link>
							<Link to="https://www.tiktok.com/" target={'_blank'}>
								<ion-icon name="logo-tiktok" size="large"></ion-icon>
							</Link>
						</div>
					</nav>
				</div>
				<div className="w-full h-px mt-16 mb-4 bg-slate-50"></div>
				<p className="text-sm leading-4 text-center text-cobalto hover:text-black">
					Copyright © 2021 Company name
				</p>
			</div>
		</footer>
	);
}

export default Footer;
