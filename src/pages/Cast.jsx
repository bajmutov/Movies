import { fetchActorsMovie } from 'Api/getApi';
import NoInformation from 'components/NoInformation/NoInformation';
import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DescWrap, Li } from './Cast.styled';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchFilmsCredits = async () => {
      try {
        setIsVisible(false);
        const results = await fetchActorsMovie(movieId);
        if (!results) {
          setIsVisible(true);
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
        {actors?.length
          ? actors.map(({ id, character, profile_path, name }) => (
              <Li key={id}>
                {profile_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                    alt="Actor"
                    width={80}
                    height={120}
                  />
                )}
                <DescWrap>
                  <p>
                    <b>Actor name</b>: {name}
                  </p>
                  <p>
                    <b>Character</b>: {character}
                  </p>
                </DescWrap>
              </Li>
            ))
          : isVisible && <NoInformation />}
      </ul>
    </div>
  );
};

export default Cast;
