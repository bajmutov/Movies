import { fetchPopularMovies } from 'Api/getApi';
import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const PopularFilms = () => {
  const [films, setFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchFilmsAndUpdateState = async () => {
      try {
        const results = await fetchPopularMovies();
        if (!results) {
          throw new Error('No popular films today');
        }
        setFilms(results);
      } catch (error) {
        Notiflix.Notify.failure(error.message);
      }
    };
    fetchFilmsAndUpdateState();
  }, []);

  return (
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
  );
};

export default PopularFilms;
