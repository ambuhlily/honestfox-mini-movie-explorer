import { useSearch } from '../contexts/SearchContext';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import Spinner from '../components/Spinner';
const omdbapiUrl = "http://www.omdbapi.com/";
const apiKey = "adf1f2d7";


const Home = () => {
  const { query, setQuery, movies, setMovies } = useSearch();
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  const searchMovies = async (title) => {
    setLoading(true);
    fetch(`${omdbapiUrl}?s=${title}&apikey=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        setMovies(data.Search || []);
        setQuery(title);
        setHasSearched(true);
      })
      .finally(() => setLoading(false));
  };

  if (!movies && query !== '') {
    return (
      <div className="min-h-screen bg-primary text-white">
        <Navbar />
        <SearchBar onSearch={searchMovies} initialQuery={query}/>
        <p className="mt-4 text-gray-500">No movies found. Please search something else.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary text-white">
      <Navbar />
      <div className="flex flex-col items-center px-4 py-8">
        <div className={`${hasSearched ? 'self-start w-full sm:w-1/4' : 'w-full sm:w-1/4'} transition-all duration-300`}>
          <SearchBar onSearch={searchMovies} initialQuery={query} />
        </div>
        <div className="w-full mt-8">
          {loading && <Spinner />}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
