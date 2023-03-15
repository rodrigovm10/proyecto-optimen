import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import New from './New';
import New1 from '../../assets/Imagenes-Optimen/News/New1.jpg';
import New2 from '../../assets/Imagenes-Optimen/News/New2.jpeg';
import New3 from '../../assets/Imagenes-Optimen/News/4OPS.png';
import New4 from '../../assets/Imagenes-Optimen/News/New4.jpg';
import New5 from '../../assets/Imagenes-Optimen/News/New5.jpg';
import New6 from '../../assets/Imagenes-Optimen/News/CANIETI.jpg';
import New7 from '../../assets/Imagenes-Optimen/News/New7.jpg';
import New8 from '../../assets/Imagenes-Optimen/News/New8.jpg';
import New9 from '../../assets/Imagenes-Optimen/News/New9.jpg';
import New10 from '../../assets/Imagenes-Optimen/News/New10.jpg';
import New11 from '../../assets/Imagenes-Optimen/News/New11.jpg';
import New12 from '../../assets/Imagenes-Optimen/News/New12.jpg';
import New13 from '../../assets/Imagenes-Optimen/News/New13.jpg';
import New14 from '../../assets/Imagenes-Optimen/News/New14.jpg';
import New15 from '../../assets/Imagenes-Optimen/News/New15.jpg';
import New16 from '../../assets/Imagenes-Optimen/News/csf_latam.jpg';

function NewsContainer() {
	return (
		<div className="mt-auto mb-[50px] mr-auto ml-auto w-full max-w-940 rounded-2xl bg-white">
			<section>
				<Carousel>
					{/* Fourth Carousel  */}
					<Carousel showArrows={false} showStatus={false}>
						<New
							title={'Forum BJXAEROSPACE'}
							date={'Oct 31, 2020'}
							description={
								'We invite you to participate in the "2nd Business Forum of the Bajìo A.C Aerospace Cluster", follow the conferences, panels, and meetups of the event on our platform and social networks. Click on the link: bjxaerospace.org and Register!'
							}
							src={New1}
							alt={'New1'}
						/>
						<New
							title={'4OPS By Optimen'}
							date={'Oct 19, 2020'}
							description={
								'14 years streamlining global mobility through a passionate software developers team. Congratulations TEAM Optimen!'
							}
							src={New2}
							alt={'New2'}
						/>
						<New
							title={'4OPS By Optimen'}
							date={'Oct 15, 2020'}
							description={
								'We are proud of our new Technological Solution to achieve our Purpose: Streamline the World Mobility!'
							}
							src={New3}
							alt={'New3'}
						/>
						<New
							title={'RedHat Business Partner'}
							date={'Aug 19, 2020'}
							description={
								'We are pleased to announce that Optimen has been integrated as Business Partner Solution Provider by Red Hat.  This alliance enhance our commitment to bring efficient and optimal solutions to our clients.'
							}
							src={New4}
							alt={'New4'}
						/>
						<New
							title={'OPTIMEN-CINVESTAV'}
							date={'Aug 03, 2020'}
							description={
								'We are gratified to announce a strategic alliance established with the Cinvestav Tamaulipas. We will collaborate on solving logistics, production planning, and ground transportation complex problems. This alliance will help optimize the allocation of resources of companies worldwide, improving their productivity and competitiveness.'
							}
							src={New5}
							alt={'New5'}
						/>
					</Carousel>
					{/* Third Carousel  */}
					<Carousel showStatus={false}>
						<New
							title={'New Alliances'}
							date={'Mar 23, 2020'}
							description={
								'We continue to generate alliances. This month we joined the "Aeroclúster Querétaro" and the "CANIETI-CLUTING", We are proud to be active members.'
							}
							src={New6}
							alt={'New6'}
						/>
						<New
							title={'Portuguese Course'}
							date={'Feb 03, 2020'}
							description={
								'This week began our Portuguese course as a continuous training that Optimen provides to the whole team.'
							}
							src={New7}
							alt={'New7'}
						/>
						<New
							title={'Visit of LATAM Airlines'}
							date={'Jan 21, 2020'}
							description={
								'We closed the week very happy for the visit of LATAM Airlines, who took a course led by members of our team. We continue to strengthen our relationship with our customers'
							}
							src={New8}
							alt={'New8'}
						/>
						<New
							title={"Orky, Optimen's traveling mascot"}
							date={'Jan 14, 2020'}
							description={`We introduce you "Orky" Optimen's traveling mascot that begins in 2020 visiting Santiago de Chile. Join us to follow him on his next trips.`}
							src={New9}
							alt={'New9'}
						/>
						<New
							title={'Ana Avatar Xprize'}
							date={'Jan 06, 2020'}
							description={
								'We join the "Ana Avatar Xprize" contest through our partner INBIODROID TEAM, collaboratin with the programming, algorithm development and Artifical Intelligence of the avatar.'
							}
							src={New10}
							alt={'New10'}
						/>
					</Carousel>
					{/* Second Carousel  */}
					<Carousel showStatus={false}>
						<New
							title={'Alliance with UTNG'}
							date={'Dec 16, 2019'}
							description={
								"Today we formalize our relationship and commitment with the 'Universidad Tecnológica del Norte de Guanajuato' to continue developing the talent of Guanajuato students."
							}
							src={New11}
							alt={'New11'}
						/>
						<New
							title={'Industrial Transformation México'}
							date={'Oct 17, 2019'}
							description={
								'Closing "Industrial Transformation México". We feel proud to have been part of a fair that promotes the digital transformation of our country and smart manufacturing.'
							}
							src={New12}
							alt={'New12'}
						/>
						<New
							title={'Optimen 13th Anniversary'}
							date={'Oct 19, 2019'}
							description={
								'13 years, strongly committed for software development on the Airline Industry. Congrats Optimen TEAM!!!'
							}
							src={New13}
							alt={'New13'}
						/>
						<New
							title={'Innovation Hub Optimen'}
							date={'Feb 15, 2019'}
							description={
								'Guanajuato has an innovation center in the aerospace sector. Optimen inaugurated its innovation center, a space dedicated to the development of competencies in the aeronautical sector.'
							}
							src={New14}
							alt={'New14'}
						/>
						<New
							title={'ITESG 2018'}
							date={'Nov 07, 2018'}
							description={
								'A conference was held where the services offered by OPTIMEN and the experience of a recent graduate in the aeronautical field were exposed.'
							}
							src={New15}
							alt={'New15'}
						/>
					</Carousel>
					{/* First Carousel  */}
					<Carousel showStatus={false}>
						<New
							title={'CSF 2017'}
							date={'Aug 23, 2017'}
							description={
								'Breaking paradigms! Optimen and the training program without Borders making presence in Santiago de Chile, Thanks to LATAM and the Secretary of Economic Development Sustenable (SDES) for the opportunity.'
							}
							src={New16}
							alt={'New16'}
						/>
					</Carousel>
				</Carousel>
			</section>
		</div>
	);
}

export default NewsContainer;
