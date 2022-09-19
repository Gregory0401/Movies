// import { ReactQueryDevtools } from 'react-query/devtools';
import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import s from './App.module.css';
import Home from './pages/Home/Home';
import Cast from './pages/Cast';
import Movies from './pages/Movies';
import Reviews from './pages/Reviews';
import MovieDetails from './pages/MovieDetails';
import NotFound from './pages/NotFound';
import Header from './common/Header';
import MoviesSearchValueCtx, { moviesSearchValueCtx } from '../context/MoviesSearchValue/moviesSearchValueCtx';

const queryClient = new QueryClient();

export const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <MoviesSearchValueCtx value={moviesSearchValueCtx}>
        <div className={s.container}>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movies' element={<Movies />} />
            <Route path='/movies/:movieId' element={<MovieDetails />}>
              <Route path={'reviews'} element={<Reviews />} />
              <Route path={'cast'} element={<Cast />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </MoviesSearchValueCtx>
      {/*<ReactQueryDevtools initialIsOpen={false} />*/}
    </QueryClientProvider>
  );
};
