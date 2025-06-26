import { Routes, Route } from 'react-router-dom';
import Favourites from './pages/Favourites';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/favourites" element={<Favourites />} />
    </Routes>
  );
}

export default App;
