import '../Components.css';
import GTOtech from '../../assets/Imagenes-Optimen/Home/GTOtech2.webp';
import AeroSpace from '../../assets/Imagenes-Optimen/Home/bjx_aerospace.png';
import Cofoce from '../../assets/Imagenes-Optimen/Home/COFOCE.webp';
import Aerocluster from '../../assets/Imagenes-Optimen/Home/AEROCLUSTER_QRO.webp';
import Canieti from '../../assets/Imagenes-Optimen/Home/CANIETI.webp';
import Clutig from '../../assets/Imagenes-Optimen/Home/CLUTIG.webp';
import LogoGob from '../../assets/Imagenes-Optimen/Home/LOGO_GOBIERNO.webp';
import Atg from '../../assets/Imagenes-Optimen/Home/ATG_ADDITIVE_MANUFCATURING.webp';
import UTNG from '../../assets/Imagenes-Optimen/Home/logo-utng.png';
import Horizont from '../../assets/Imagenes-Optimen/Home/HORIZONTC.jpg ';
function Slider() {
	return (
		<section>
			<h2
				className={
					'mt-3 mb-5 text-center text-4xl font-semibold leading-40 text-cobalto'
				}
			>
				Partnerships and Affiliations
			</h2>
			<div className={'overflow-hidden py-6 px-8 opacity-40'}>
				<div className={' mr-auto ml-auto w-full max-w-4xl '}>
					<div className={'animacion flex items-center justify-around'}>
						<img className={'mr-4 ml-4 w-16'} src={GTOtech} alt={'GTOtech2'} />
						<img
							className={'mr-4 ml-4 w-24'}
							src={AeroSpace}
							alt={'Aerospace'}
						/>
						<img className={'mr-4 ml-4 w-24'} src={GTOtech} alt={'GTOtech2'} />
						<img className={'mr-4 ml-4 w-24'} src={Cofoce} alt={'COFOCE'} />
						<img
							className={'mr-4 ml-4 w-24'}
							src={Aerocluster}
							alt={'AEROCLUSTER_QRO'}
						/>
						<img className={'mr-4 ml-4 w-24'} src={Canieti} alt={'CANIETI'} />
						<img className={'mr-4 ml-4 w-24'} src={Clutig} alt={'CLUTIG'} />
						<img
							className={'mr-4 ml-4 w-16'}
							src={LogoGob}
							alt={'LOGO_GOBIERNO'}
						/>
						<img className={'mr-4 ml-4 w-16'} src={UTNG} alt={'logo-utng'} />
						<img className={'mr-4 ml-4 w-24'} src={Atg} alt={'ATG-ADDITIVE'} />
						<img
							className={'mr-4 ml-4 w-32'}
							src={Horizont}
							alt={'HORIZONTC'}
						/>
						<img
							className={'mr-4 ml-4 w-24'}
							src={'./src/assets/Imagenes-Optimen/Home/EDUCAFINEVOLUCIONA.png'}
							alt={'EDUCAFIN'}
						/>
						<img
							className={'mr-4 ml-4 w-24'}
							src={'./src/assets/Imagenes-Optimen/Home/idea_gto.png'}
							alt={'idea-gto'}
						/>
						<img
							className={'mr-4 ml-4 w-24'}
							src={'./src/assets/Imagenes-Optimen/Home/CEI_GPA.jpeg'}
							alt={'CEI_GPA'}
						/>
						<img
							className={'mr-4 ml-4 w-16'}
							src={'./src/assets/Imagenes-Optimen/Home/Cinvestav.png'}
							alt={'Cinvestav'}
						/>
						<img
							className={'mr-4 ml-4 w-24'}
							src={'./src/assets/Imagenes-Optimen/Home/IECA_.png'}
							alt={'IECA'}
						/>
						<img
							className={'mr-4 ml-4 w-16'}
							src={'./src/assets/Imagenes-Optimen/Home/JuventudEsGTO.jpg'}
							alt={'JuventudEsGTO'}
						/>
						<img
							className={'mr-4 ml-4 w-16'}
							src={'./src/assets/Imagenes-Optimen/Home/TDM.jpg'}
							alt={'JuventudEsGTO'}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Slider;
