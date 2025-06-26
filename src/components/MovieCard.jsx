import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieCard = ({ movie }) => {
  return (
    <Link
    to={`/movie/${movie.imdbID}`}
    className="bg-secondary rounded-lg overflow-hidden shadow-md hover:shadow-lg transition transform hover:scale-105"
    >
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'}
        alt={movie.Title}
        className="w-full h-64 object-cover"
      />
      <div className="p-3 bg-secondary">
        <h2 className="text-positive font-semibold">{movie.Title}</h2>
        <p className="text-positive text-xs">{movie.Year}</p>
      </div>
    </Link>
  );
}
MovieCard.propTypes = {
  movie: PropTypes.shape({
    imdbID: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
