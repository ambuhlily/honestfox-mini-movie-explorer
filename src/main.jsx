// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { SearchProvider } from './contexts/SearchContext.jsx';
import { FavouritesProvider } from './contexts/FavouritesContext.jsx';
import { Toaster } from 'react-hot-toast';

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
