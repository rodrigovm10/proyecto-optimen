import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectNewsById } from './contentCreatorApiSlice';
import EditNewsForm from './EditNewsForm';

const EditNews = () => {
	const { id } = useParams();

	const news = useSelector(state => selectNewsById(state, id));

	const content = news ? <EditNewsForm news={news} /> : <p>Cargando...</p>;

	return content;
};

export default EditNews;
