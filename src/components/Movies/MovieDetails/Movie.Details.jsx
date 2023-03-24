import { Link, useParams, useLocation } from 'react-router-dom';
import { useRef } from 'react';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();
  return (
    <div>
      <h1>DogDetails: {movieId}</h1>
      <Link to={backLinkLocationRef.current}>Назад к странице коллекции</Link>
    </div>
  );
};

export default MovieDetails;
