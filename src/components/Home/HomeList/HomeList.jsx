import { Link } from "react-router-dom";
const HomeList = ({ data, loading, location }) => {
	return (
    <ul>
      {loading
        ? 'Loading...'
        : data.map(({ title, id }) => (
            <li key={id}>
              <Link
                to={`/movies/${id}`}
                state={{ from: location }}
                
              >
                {title}
              </Link>
            </li>
          ))}
    </ul>
  );
}

export default HomeList;