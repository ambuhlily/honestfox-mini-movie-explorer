import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.imdbID}`} className="bg-gray-800 rounded-md overflow-hidden shadow hover:shadow-lg transition">
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'}
        alt={movie.Title}
        className="w-full h-72 object-cover"
      />
      <div className="p-2">
        <h2 className="text-white text-lg font-semibold">{movie.Title}</h2>
        <p className="text-gray-400 text-sm">{movie.Year}</p>
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
