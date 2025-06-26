import { Link } from 'react-router-dom';

const MovieDetails = () => {

  return (
    <div className="p-4">
      <h1>Movie Details</h1>

      <Link to="/" className="text-blue-500 hover:underline">
        Go back to Home
      </Link>
    </div>
  );
};

export default MovieDetails;
