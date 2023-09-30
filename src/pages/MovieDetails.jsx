import { fetchFullInfoMovie } from 'Api/getApi';
import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo';
import { Loader } from 'components/Loader/Loader';
import NoInformation from 'components/NoInformation/NoInformation';
import Notiflix from 'notiflix';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [film, setFilm] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();

  useEffect(() => {
    const fetchFilmsAndUpdateState = async () => {
      try {
        setIsLoading(true);
        setIsVisible(false);
        const results = await fetchFullInfoMovie(movieId);
        if (!results.homepage) {
          setIsVisible(true);
        }
        setFilm(results);
      } catch (error) {
        Notiflix.Notify.failure(error.message);
      } finally {
        setIsLoading(false);
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
    genres?.length;

  return (
    <>
      {isLoading && <Loader />}
      {shouldShowInfo ? (
        <>
          <Link to={backLinkLocationRef.current}>Go Back</Link>
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
            <AdditionalInfo id={movieId} />
          </div>
          <Suspense fallback={<div>Loading info...</div>}>
            <Outlet />
          </Suspense>
        </>
      ) : (
        isVisible && <NoInformation />
      )}
    </>
  );
};

export default MovieDetails;
