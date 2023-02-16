import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Suspense, lazy } from 'react';
const CarouselSection = lazy(() => import('../Customers/CarouselSection'));

function Customers() {
	return (
		<>
			<Navigation />
			<Suspense>
				<CarouselSection
					title="Our Customers"
					description="Through our capabilities, the services we provide, and our
								commitment, we implement projects resulting in satisfied clients
								and success stories."
					src1="./src/assets/Imagenes-Optimen/Customers/Avianca.png"
					alt1="Avianca"
					src2="./src/assets/Imagenes-Optimen/Customers/Boeing.png"
					alt2="Boeing"
					src3="./src/assets/Imagenes-Optimen/Customers/InterJet.png"
					alt3="Interjet"
					src4="./src/assets/Imagenes-Optimen/Customers/Jepp.webp"
					alt4="Jepp"
					src5="./src/assets/Imagenes-Optimen/Customers/Latam.png"
					alt5="Latam"
					src6="./src/assets/Imagenes-Optimen/Customers/TAP.png"
					alt6="TAP"
					src7="./src/assets/Imagenes-Optimen/Customers/Volaris.webp"
					alt7="Volaris"
				/>
			</Suspense>
			<Suspense>
				<CarouselSection
					title="Our Project Experience"
					description="Through our experience as certified Jeppesen/Boeing consultants, we contribute to the support of the configuration and customization of state-of-the-art optimization software for several key airlines in the aeronautical sector at an international level."
					src1="./src/assets/Imagenes-Optimen/Customers/EndeavorAir.png"
					alt1="Endeavor"
					src2="./src/assets/Imagenes-Optimen/Customers/Azul.png"
					alt2="Azul"
					src3="./src/assets/Imagenes-Optimen/Customers/AeroMéxico.webp"
					alt3="AeroMéxio"
					src4="./src/assets/Imagenes-Optimen/Customers/Copa Airlines.png"
					alt4="Copa Airlines"
					src5="./src/assets/Imagenes-Optimen/Customers/Gol.png"
					alt5="Gol"
					src6="./src/assets/Imagenes-Optimen/Customers/Iberia.png"
					alt6="Iberia"
					src7="./src/assets/Imagenes-Optimen/Customers/United.webp"
					alt7="United"
					src8="./src/assets/Imagenes-Optimen/Customers/Kalita.webp"
					alt8="Kalita"
					src9="./src/assets/Imagenes-Optimen/Customers/Frontier.png"
					alt9="Frontier"
					src10="./src/assets/Imagenes-Optimen/Customers/Alaska.webp"
					alt10="Alaska"
				/>
			</Suspense>
			<Footer />
		</>
	);
}

export default Customers;
