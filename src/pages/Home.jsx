import { Link } from 'react-router-dom';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
const omdbapiUrl = "http://www.omdbapi.com/";
const apiKey = "adf1f2d7";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    fetch(`${omdbapiUrl}?s=${title}&apikey=${apiKey}`)
      .then(response => response.json())
      .then(data => setMovies(data.Search) || []);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">
        Mini Movie Explorer
      </h1>

      <div className="p-4">
        <SearchBar onSearch={searchMovies} />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      </div>

        <Link to="/favourites" className="text-blue-500 hover:underline">
          Go to Favourites Page
        </Link>

    </div>
  );
};

export default Home;
