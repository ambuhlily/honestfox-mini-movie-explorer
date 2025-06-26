import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({onSearch, initialQuery}) => {
  const [query, setQuery] = useState(initialQuery || '');

  // sets initialquery for search continuity
  useEffect(() => {
    initialQuery && onSearch(initialQuery);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    query && onSearch(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Find movies..."
        className="p-2 rounded-l-md border border-accent w-full text-black"
      />
      <button type="submit" className="bg-accent px-4 py-2 text-white rounded-r-md cursor-pointer">
        Search
      </button>
    </form>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  initialQuery: PropTypes.string,
};

export default SearchBar;
