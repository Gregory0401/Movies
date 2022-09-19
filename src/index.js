import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import './index.css';

// API ключ (v3 auth)
// 20d1927a0e32ed91fd5455d37cc9aa27
// Приклад API-запиту
// https://api.themoviedb.org/3/movie/550?api_key=20d1927a0e32ed91fd5455d37cc9aa27
// Токен доступу для читання API (v4 auth)
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGQxOTI3YTBlMzJlZDkxZmQ1NDU1ZDM3Y2M5YWEyNyIsInN1YiI6IjYzMTEwNDg5Y2I4MDI4MDA5NGZiN2FmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F5kIwmPl3OGiO-PkOpTFSVkirjZH1FsGJUK86jFlA2E

// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
