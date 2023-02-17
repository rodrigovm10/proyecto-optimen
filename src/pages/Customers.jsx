import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Suspense, lazy } from 'react';
import Avianca from './../assets/Imagenes-Optimen/Customers/Avianca.png';
import Boeing from './../assets/Imagenes-Optimen/Customers/Boeing.png';
import Interjet from './../assets/Imagenes-Optimen/Customers/InterJet.png';
import Jepp from './../assets/Imagenes-Optimen/Customers/Jepp.webp';
import Latam from './../assets/Imagenes-Optimen/Customers/Latam.png';
import TAP from './../assets/Imagenes-Optimen/Customers/TAP.png';
import Volaris from './../assets/Imagenes-Optimen/Customers/Volaris.webp';
import Endeavor from './../assets/Imagenes-Optimen/Customers/EndeavorAir.png';
import Azul from './../assets/Imagenes-Optimen/Customers/Azul.png';
import AeroMexico from './../assets/Imagenes-Optimen/Customers/AeroMéxico.webp';
import CopaAirlines from './../assets/Imagenes-Optimen/Customers/Copa Airlines.png';
import Gol from './../assets/Imagenes-Optimen/Customers/Gol.png';
import Iberia from './../assets/Imagenes-Optimen/Customers/Iberia.png';
import UnitedA from './../assets/Imagenes-Optimen/Customers/United-Airlines-logo.png';
import Kalita from './../assets/Imagenes-Optimen/Customers/Kalita.webp';
import Frontier from './../assets/Imagenes-Optimen/Customers/Frontier.png';
import Alaska from './../assets/Imagenes-Optimen/Customers/Alaska.webp';
const CarouselSection = lazy(() => import('../Customers/CarouselSection'));
const CarouselSection2 = lazy(() => import('../Customers/CarouselSection2'));

function Customers() {
	return (
		<>
			<Navigation />
			<Suspense>
				<CarouselSection
					title={'Our Customers'}
					description={
						'Through our capabilities, the services we provide, and our commitment, we implement projects resulting in satisfied clients and success stories.'
					}
					src1={Avianca}
					alt1={'Avianca'}
					src2={Boeing}
					alt2={'Boeing'}
					src3={Interjet}
					alt3={'Interjet'}
					src4={Jepp}
					alt4={'Jepp'}
					src5={Latam}
					alt5={'Latam'}
					src6={TAP}
					alt6={'TAP'}
					src7={Volaris}
					alt7={'Volaris'}
				/>
			</Suspense>
			<Suspense>
				<CarouselSection2
					title={'Our Project Experience'}
					description={
						'Through our experience as certified Jeppesen/Boeing consultants, we contribute to the support of the configuration and customization of state-of-the-art optimization software for several key airlines in the aeronautical sector at an international level.'
					}
					src1={Endeavor}
					alt1={'Endeavor'}
					src2={Azul}
					alt2={'Azul'}
					src3={AeroMexico}
					alt3={'AeroMéxio'}
					src4={CopaAirlines}
					alt4={'Copa Airlines'}
					src5={Gol}
					alt5={'Gol'}
					src6={Iberia}
					alt6={'Iberia'}
					src7={UnitedA}
					alt7={'United'}
					src8={Kalita}
					alt8={'Kalita'}
					src9={Frontier}
					alt9={'Frontier'}
					src10={Alaska}
					alt10={'Alaska'}
				/>
			</Suspense>
			<Footer />
		</>
	);
}

export default Customers;
