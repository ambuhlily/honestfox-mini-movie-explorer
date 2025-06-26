import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-secondary">
      <Link to="/">
        <h1 className="text-2xl text-accent font-cedarville">Mini Movie Explorer</h1>
      </Link>
      <Link to="/favourites">
        <h1 className="text-accent font-cedarville hover:underline">my favourites</h1>
      </Link>
    </nav>
  );
};

export default Navbar;
