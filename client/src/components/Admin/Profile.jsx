import NavBar from './NavBar';
import IndividualProfile from './IndividualProfile';

function Profile() {
	return (
		<>
			<NavBar />
			<div className="ml-[20%]">Desde Profile</div>
			<IndividualProfile />
		</>
	);
}

export default Profile;
