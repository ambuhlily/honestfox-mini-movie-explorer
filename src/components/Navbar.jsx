import { Link } from 'react-router-dom';
import { useSearch } from '../contexts/SearchContext';
import PropTypes from 'prop-types';

const Navbar = () => {
  const { setQuery, setMovies } = useSearch();

  const handleReset = () => {
    setQuery('');
    setMovies([]);
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-secondary">
      <Link to="/" onClick={handleReset}>
        <h1 className="text-2xl text-accent font-cedarville">Mini Movie Explorer</h1>
      </Link>
      <Link to="/favourites">
        <h1 className="text-accent font-cedarville hover:underline">my favourites ♡</h1>
      </Link>
    </nav>
  );
};

Navbar.propTypes = {
  setQuery: PropTypes.func,
  setMovies: PropTypes.func,
};

export default Navbar;
