import { useSearch } from '../contexts/SearchContext';
import { useState } from 'react';
import MovieCard from '../components/MovieCard';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import Spinner from '../components/Spinner';
const apiKey = "adf1f2d7";
const omdbapiUrl = "http://www.omdbapi.com/";

const Home = () => {
  const { query, setQuery, movies, setMovies } = useSearch();
  const [loading, setLoading] = useState(false);

  const searchMovies = (title) => {
    setLoading(true);

    fetch(`${omdbapiUrl}?s=${title}&apikey=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        setMovies(data.Search || []);
        setQuery(title);
      })
      .catch(error => {
        console.error("Error fetching movies:", error);
        setMovies([]);
      })
      .finally(() => setLoading(false));
  };

  // if no movies are found from search
  if (movies.length === 0 && query) {
    return (
      <div className="min-h-screen bg-primary text-white">
        <Navbar />
        <div className={'flex flex-col items-center px-4 py-8'}>
          <div className='w-full sm:w-1/4'>
            <SearchBar onSearch={searchMovies} initialQuery={query} />
          </div>
          <p className="mt-4 font-cedarville text-gray-500">No movies found.
            Please search something else.</p>
        </div>
      </div>
    );
  }

  return (
    <>
    <Navbar />
      <div className="min-h-screen bg-primary">
        <div className="flex flex-col items-center px-4 py-8">
          <div className='w-full sm:w-1/4'>
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
    </>
  );
};

export default Home;
