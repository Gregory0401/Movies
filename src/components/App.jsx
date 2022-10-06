import { useState, lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import MainLoader from './Watch';

const Layout = lazy(() => import('./Layout'));
const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const MovieCastSubPage = lazy(() => import('../pages/MovieCastSubPage'));
const MovieReviewsSubPage = lazy(() => import('../pages/MovieReviewsSubPage'));

const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
`;

export const App = () => {
  const [item, setItem] = useState({});

  const itemFetcher = data => {
    setItem(data);
  };

  return (
    <Container>
      <Suspense fallback={<MainLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/movies/"
              element={
                <Suspense fallback={<MainLoader />}>
                  <MoviesPage />
                </Suspense>
              }
            />
            <Route
              path="/movies/:slug"
              element={
                <Suspense fallback={<MainLoader />}>
                  <MovieDetailsPage itemFetcher={itemFetcher} />
                </Suspense>
              }
            >
              <Route
                path="/movies/:slug/cast"
                element={
                  <Suspense fallback={<MainLoader />}>
                    <MovieCastSubPage item={item} />
                  </Suspense>
                }
              />
              <Route
                path="/movies/:slug/reviews"
                element={
                  <Suspense fallback={<MainLoader />}>
                    <MovieReviewsSubPage item={item} />
                  </Suspense>
                }
              />
            </Route>
            <Route
              path="*"
              element={
                <Suspense fallback={<MainLoader />}>
                  <NotFoundPage />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
    </Container>
  );
};
