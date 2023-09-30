import { fetchMovieByName } from 'Api/getApi';
import { Loader } from 'components/Loader/Loader';
import SearchBox from 'components/SearchBox/SearchBox';
import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('movieName') ?? '';
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    const { value } = e.target.elements.movieName;
    if (!value.trim()) {
      alert('Input movie name');
    }
    if (value === '') {
      return setSearchParams({});
    }
    setSearchParams({ movieName: value });
    e.target.reset();
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const movies = await fetchMovieByName(movieName);
        setMovies(movies);
      } catch (error) {
        Notiflix.Notify.failure(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [movieName]);

  // const updateQueryString = evt => {
  //   const movieIdValue = evt.target.value;
  //   if (movieIdValue === '') {
  //     return setSearchParams({});
  //   }
  //   setSearchParams({ movieId: movieIdValue });
  // };

  return (
    <>
      <SearchBox onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
