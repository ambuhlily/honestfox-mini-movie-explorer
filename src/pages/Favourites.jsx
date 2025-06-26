import { Link } from 'react-router-dom';
import { useFavourites } from '../contexts/FavouritesContext';
import MovieCard from '../components/MovieCard';
import Navbar from '../components/Navbar';

const Favourites = () => {
  const { favourites } = useFavourites();

  return (
    <>
    <Navbar />
    <div className="p-4 text-white">
    <h1 className="text-3xl text-positive font-cedarville mt-16 mb-16 text-center">
      Favourites
    </h1>
      {favourites.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-16">
          <p className="font-cedarville text-positive">Hmm... no favourites yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
          {favourites.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
      <Link to="/" className="text-2xl text-accent font-cedarville hover:underline">
        ⬅ Back to home
      </Link>
    </div>
    </>
  );
};

export default Favourites;
