import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useFavourites } from '../contexts/FavouritesContext.jsx';
import { toast } from 'react-hot-toast';
import Navbar from '../components/Navbar.jsx';
import Spinner from '../components/Spinner.jsx';
const apiKey = "adf1f2d7";
const omdbapiUrl = "http://www.omdbapi.com/";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const { addToFavourites, removeFromFavourites, isFavourite } = useFavourites();

  // fetch movie details
  useEffect(() => {
    fetch(`${omdbapiUrl}?i=${id}&apikey=${apiKey}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  // toggle favourite status and show toast notif
  const toggleFavourite = () => {
    if (isFavourite(movie.imdbID)) {
      removeFromFavourites(movie.imdbID);
      toast.error(`${movie.Title} removed from favourites!`);
    } else {
      addToFavourites(movie);
      toast.success(`${movie.Title} added to favourites!`);
    }
  };

  // load state
  if (!movie) return <Spinner />;

  return (
    <>
    <Navbar />
    <div className="min-h-screen p-6 text-gray-800">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 bg-tertiary p-6 rounded-xl shadow-md">

      <div className="flex-shrink-0">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-80 h-auto rounded-lg shadow"
        />
      </div>

      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-4">{movie.Title}</h1>
          <p className="mb-2"><strong>Year:</strong> {movie.Year}</p>
          <p className="mb-2"><strong>Genre:</strong> {movie.Genre}</p>
          <p className="mb-4"><strong>Plot:</strong> {movie.Plot}</p>
        </div>

        <button
          onClick={toggleFavourite}
          className={`w-fit px-4 py-2
            rounded font-cedarville shadow cursor-pointer transition
            transform hover:translate-x-0.5 hover:translate-y-0.5 ${
            isFavourite(movie.imdbID) ? 'bg-positive text-white' : 'bg-negative text-black'
          }`}
        >
          {isFavourite(movie.imdbID) ? 'Actually I hate this movie...' : 'I love this movie!'}
        </button>
      </div>
    </div>


    <div className="mt-6 text-center">
      <Link to="/" className="text-2xl text-accent font-cedarville hover:underline">
        ⬅ Back to results
      </Link>
    </div>
  </div>
  </>
  );
};

export default MovieDetails;
