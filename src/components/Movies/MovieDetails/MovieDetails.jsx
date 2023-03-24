import { Link, useParams, useLocation, Outlet } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { getMovieDetails } from 'components/services/services';
import { DetailsImg } from './MovieDetails.styled';

const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await getMovieDetails(movieId);
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [movieId]);

  const getYear = releaseDate => {
    const date = new Date(releaseDate);
    return date.getFullYear();
  };

  const getGenres = arrGenres => {
    return arrGenres.map(genre => genre.name).join(', ');
  };

  const cameBack = location.state?.from ?? '/';

  return (
    <>
      <Link to={cameBack}>Go Back</Link>
      {loading ? (
        'Loading...'
      ) : (
        <>
          <div>
            {data.poster_path ? (
              <DetailsImg
                alt={data.original_title}
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              />
            ) : (
              <img alt="not available" />
            )}

            <div>
              <h1>
                {data.original_title} ({getYear(data.release_date)})
              </h1>
              <p>User Score: {~~(data.vote_average * 10)}%</p>
              <p>Overview</p>
              <p>{data.overview}</p>
              <p>Genres</p>
              <p>{getGenres(data.genres)}</p>
            </div>
          </div>
          <div>
            <ul>
              <li>
                <Link to="cast" state={{ from: cameBack }}>
                  <button>Cast</button>
                </Link>
              </li>
              <li>
                <Link to="reviews" state={{ from: cameBack }}>
                  <button>Reviews</button>
                </Link>
              </li>
            </ul>
          </div>
          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};

export default MovieDetails;
