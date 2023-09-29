import { fetchActorsMovie } from 'Api/getApi';
import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchFilmsCredits = async () => {
      try {
        const results = await fetchActorsMovie(movieId);
        if (!results) {
          throw new Error('No info about film');
        }
        setActors(results);
      } catch (error) {
        Notiflix.Notify.failure(error.message);
      }
    };
    fetchFilmsCredits();
  }, [movieId]);

  return (
    <div>
      <ul>
        {actors?.length ? (
          actors.map(({ id, character, profile_path, name }) => (
            <li key={id}>
              {profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt="Actor"
                  width={80}
                  height={120}
                />
              )}
              <p>Actor name: {name}</p>
              <p>Character: {character}</p>
            </li>
          ))
        ) : (
          <p>Sorry....☹️ No info about actors</p>
        )}
      </ul>
    </div>
  );
};

export default Cast;
