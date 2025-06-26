import { BrowserRouter } from 'react-router-dom';
import { FavouritesProvider } from './contexts/FavouritesContext.jsx';
import { SearchProvider } from './contexts/SearchContext.jsx';
import { Toaster } from 'react-hot-toast';
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <SearchProvider>
      <FavouritesProvider>
        <App />
        <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      </FavouritesProvider>
    </SearchProvider>
  </BrowserRouter>
);
