import { fetchReviewsMovie } from 'Api/getApi';
import NoInformation from 'components/NoInformation/NoInformation';
import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [films, setFilms] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchFilmsReviews = async () => {
      try {
        const results = await fetchReviewsMovie(movieId);
        if (!results) {
          throw new Error('No info about film');
        }
        setFilms(results);
      } catch (error) {
        Notiflix.Notify.failure(error.message);
      }
    };
    fetchFilmsReviews();
  }, [movieId]);

  return (
    <div>
      <ul>
        {films?.length ? (
          films.map(({ id, content, author }) => (
            <li key={id}>
              {' '}
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <NoInformation />
        )}
      </ul>
    </div>
  );
};

export default Reviews;
