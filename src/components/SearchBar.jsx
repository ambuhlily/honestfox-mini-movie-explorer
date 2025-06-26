import { useState } from 'react';
import PropTypes from 'prop-types';

function SearchBar({onSearch}) {
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    query && onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search for movies"
        className="p-2 rounded-l-md border border-black w-full text-black"
      />
      <button type="submit" className="bg-blue-500 px-4 py-2 text-white rounded-r-md">
        Search
      </button>
    </form>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
