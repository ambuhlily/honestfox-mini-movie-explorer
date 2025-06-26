import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const FavouritesContext = createContext();

export const useFavourites = () => useContext(FavouritesContext);

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('favourites');
    if (stored) {
      setFavourites(JSON.parse(stored));
    }
  }, []);

  // sync with local storage
  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  // adds movie to faves
  const addToFavourites = (movie) => {
    if (!favourites.some((fav) => fav.imdbID === movie.imdbID)) {
      setFavourites((prev) => [...prev, movie]);
    }
  };

  // removes movie from faves
  const removeFromFavourites = (id) => {
    setFavourites((prev) => prev.filter((fav) => fav.imdbID !== id));
  };

  // checks for movie already in faves
  const isFavourite = (id) => {
    return favourites.some((fav) => fav.imdbID === id);
  };

  return (
    <FavouritesContext.Provider value={{ favourites, addToFavourites, removeFromFavourites, isFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
};

FavouritesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
