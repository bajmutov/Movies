import { fetchMovieByName } from 'Api/getApi';
import SearchBox from 'components/SearchBox/SearchBox';
import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('movieName') ?? '';
  const [movies, setMovies] = useState([]);

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
        const movies = await fetchMovieByName(movieName);
        console.log('movies', movies);
        setMovies(movies);
      } catch (error) {
        Notiflix.Notify.failure(error.message);
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
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
