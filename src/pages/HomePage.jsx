import { useLocation } from 'react-router-dom';
import useFetchHomeMovies from '../hooks/useFetchHomeMovies';
import styled from 'styled-components';
import Loader from '../components/Loader';
import MoviesUlComponentReused from 'components/MoviesUlComponentReused';

const StyledH1 = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: #afb9f8;
  text-transform: uppercase;
  margin: 0;
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const HomePage = () => {
  const { pathname } = useLocation();
  const { movies, isLoading } = useFetchHomeMovies();

  return (
    <>
      <FlexDiv>
        <StyledH1>Trending today</StyledH1>
      </FlexDiv>
      {isLoading && <Loader />}
      <MoviesUlComponentReused movies={movies} pathname={pathname} />
    </>
  );
};

export default HomePage;
