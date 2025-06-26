import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useFavourites } from '../contexts/FavouritesContext.jsx';
const apiKey = "adf1f2d7";
const omdbapiUrl = "http://www.omdbapi.com/";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const { addToFavourites, removeFromFavourites, isFavourite } = useFavourites();

  useEffect(() => {
    fetch(`${omdbapiUrl}?i=${id}&apikey=${apiKey}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  const toggleFavourite = () => {
    isFavourite(movie.imdbID) ? removeFromFavourites(movie.imdbID) : addToFavourites(movie);
  };

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1>Movie Details</h1>
      <div className="p-4 text-gray-800 bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">{movie.Title}</h1>
        <img src={movie.Poster} alt={movie.Title} className="w-64 mb-4" />
        <p><strong>Year:</strong> {movie.Year}</p>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
        <button
          onClick={toggleFavourite}
          className={`mt-4 px-4 py-2 rounded  ${
            isFavourite(movie.imdbID) ? 'bg-[#ff8970]' : 'bg-[#DAF7A6]'
          }`}
        >
          {isFavourite(movie.imdbID) ? 'Actually I hate this movie...' : 'I love this movie!'}
        </button>
      </div>

      <Link to="/" className="text-blue-500">
        Back to results
      </Link>
    </div>
  );
};

export default MovieDetails;
