import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import slugify from 'slugify';

const Link = styled(NavLink)`
  text-decoration: none;
`;

const StyledLi = styled.li`
  font-size: 10px;
  font-weight: 500;
  text-transform: uppercase;
  transition: transform 1000ms cubic-bezier(0.4, 0, 0.2, 1);
  min-height: 460px;

  &:hover {
    transform: scale(1.05);
    text-decoration: underline;
  }
`;

const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
  list-style: none;
  padding-inline-start: 0;
`;

const StyledSection = styled.section`
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  width: 80vw;
`;

const MoviesUlComponentReused = ({ movies, pathname }) => {
  return (
    <StyledSection>
      <StyledUl>
        {movies.map(movie => (
          <StyledLi key={movie.id}>
            <Link
              to={`/movies/${slugify(`${movie.original_title} ${movie.id}`, {
                lower: true,
              })}`}
              state={{ from: pathname }}
            >
              <MovieCard movie={movie} />
            </Link>
          </StyledLi>
        ))}
      </StyledUl>
    </StyledSection>
  );
};

MoviesUlComponentReused.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
  pathname: PropTypes.string.isRequired,
};

export default MoviesUlComponentReused;
