import { fetchPopularMovies } from 'Api/getApi';
import { Loader } from 'components/Loader/Loader';
import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const PopularFilms = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchFilmsAndUpdateState = async () => {
      try {
        setIsLoading(true);
        const results = await fetchPopularMovies();
        if (!results) {
          throw new Error('No popular films today');
        }
        setFilms(results);
      } catch (error) {
        Notiflix.Notify.failure(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFilmsAndUpdateState();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <div>
        <ul>
          {films.map(({ id, title }) => (
            <li key={id}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default PopularFilms;
