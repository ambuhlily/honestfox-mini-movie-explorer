import { Link } from 'react-router-dom';
import { useSearch } from '../contexts/SearchContext';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
const omdbapiUrl = "http://www.omdbapi.com/";
const apiKey = "adf1f2d7";

const Home = () => {
  const { query, setQuery, movies, setMovies } = useSearch();

  const searchMovies = async (title) => {
    fetch(`${omdbapiUrl}?s=${title}&apikey=${apiKey}`)
      .then(response => response.json())
      .then(data => setMovies(data.Search) || []);
      setQuery(title);
  };

  if (!movies || movies.length === 0 && query) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold">Mini Movie Explorer</h1>
        <SearchBar onSearch={searchMovies} initialQuery={query}/>
        <p className="mt-4 text-gray-500">No movies found. Please search something else.</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">
        Mini Movie Explorer
      </h1>

      <div className="p-4">
        <SearchBar onSearch={searchMovies} initialQuery={query}/>
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
