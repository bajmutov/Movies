import { Link } from 'react-router-dom';

const AdditionalInfo = ({ location }) => {
  return (
    <div>
      <h2>Additional information</h2>
      <ul>
        <li>
          <Link to={`cast`} state={{ from: location }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to={`reviews`} state={{ from: location }}>
            Reviews
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdditionalInfo;
