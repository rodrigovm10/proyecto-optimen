import { Link } from 'react-router-dom';

function Links({ to, name }) {
	return (
		<div className="my-10 text-[#dadada] hover:opacity-80">
			<Link to={to}>{name}</Link>
		</div>
	);
}

export default Links;
