import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">
        Home page
      </h1>

      <div className="mt-6 space-y-4">
        <Link to="/movie/1" className="text-blue-500 hover:underline">
          Go to Movie Details
        </Link>

        <Link to="/favourites" className="text-blue-500 hover:underline">
          Go to Favourites Page
        </Link>
      </div>
    </div>
  );
};

export default Home;
