import { fetchFullInfoMovie } from 'Api/getApi';
import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo';
import Notiflix from 'notiflix';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [film, setFilm] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();

  useEffect(() => {
    const fetchFilmsAndUpdateState = async () => {
      try {
        setIsVisible(false);
        const results = await fetchFullInfoMovie(movieId);
        console.log('first', results.homepage);
        if (!results.homepage) {
          setIsVisible(true);
        }
        setFilm(results);
      } catch (error) {
        Notiflix.Notify.failure(error.message);
      }
    };
    fetchFilmsAndUpdateState();
  }, [movieId]);

  const { poster_path, title, release_date, vote_average, overview, genres } =
    film;

  const shouldShowInfo =
    poster_path &&
    title &&
    release_date &&
    vote_average &&
    overview &&
    genres?.length > 0;

  return (
    <>
      {shouldShowInfo ? (
        <>
          <Link to={backLinkLocationRef}>Go Back</Link>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt="Movie poster"
              width={300}
              height={400}
            />
            <div>
              <h2>
                {title} ({release_date?.split('-')[0]})
              </h2>
              <p>User Score: {Number(vote_average).toFixed(2)}</p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              <div>
                {genres?.map(({ id, name }) => (
                  <p key={id}>{name}</p>
                ))}
              </div>
            </div>
          </div>
          <div>
            <AdditionalInfo id={movieId} location={location} />
          </div>
          <Suspense fallback={<div>Loading info...</div>}>
            <Outlet />
          </Suspense>
        </>
      ) : (
        isVisible && <h2>Sorry ... No information</h2>
      )}
    </>
  );
};

export default MovieDetails;
