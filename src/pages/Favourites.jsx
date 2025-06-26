import { Link } from 'react-router-dom';
import { useFavourites } from '../contexts/FavouritesContext';
import MovieCard from '../components/MovieCard';

const Favourites = () => {
  const { favourites } = useFavourites();

  return (
    <div className="p-4 text-white">
      <h1 className="text-2xl font-bold mb-4">Your Favourite Movies</h1>
      {favourites.length === 0 ? (
        <p>Hmm... no favourites yet.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {favourites.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
      <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">
        Back to Home
      </Link>
    </div>
  );
};

export default Favourites;
