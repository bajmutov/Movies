import { Link, Outlet } from 'react-router-dom';

const MovieDetails = () => {
  return (
    <>
      <div>MovieDetails</div>;
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
