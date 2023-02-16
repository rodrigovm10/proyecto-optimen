import { Link } from 'react-router-dom';
import Nav from './Nav';

function Footer() {
	return (
		<footer className="relative bg-gris py-10 pr-8 pl-4 ">
			<div className="mr-auto ml-auto w-full max-w-940">
				<div className="mr-auto ml-auto flex max-w-900 items-start justify-between">
					<Link to="/" className="inline-block max-w-full">
						<img
							className="w-56"
							src="./src/assets/Imagenes-Optimen/logo-blanco-azul.png"
							alt="Logo Optimen"
						/>
					</Link>
					<nav className="grid auto-cols-fr grid-cols-templateColumns gap-x-16 gap-y-10">
						<Nav
							title="Menu"
							link1="Home"
							to1="/"
							link2="About Us"
							to2="/About Us"
							link3="Customers"
							to3="/Customers"
							link4="News"
							to4="/News"
							link5="Contact Us"
							to5="/Contact Us"
						/>
						<div className="flex flex-col items-start justify-start text-sm leading-4 text-white">
							<p className="font-bold uppercase tracking-wider opacity-80">
								Location
							</p>
							<p className="mt-3 mb-1 opacity-60">
								Av. León 119 | León, Guanajuato | Mexico
							</p>
							<p className="mt-3 mb-1 opacity-60">Phone: +52 (477) 7173339</p>
							<p className="mt-3 mb-1 opacity-60">Email: info@optimen.com.mx</p>
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
				<div className="mt-16 mb-4 h-px w-full bg-slate-50"></div>
				<p className="text-center text-sm leading-4 text-cobalto hover:text-black">
					Copyright © 2021 Company name
				</p>
			</div>
		</footer>
	);
}

export default Footer;
