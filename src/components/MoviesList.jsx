import PropTypes from 'prop-types';
import MoviesUlComponentReused from './MoviesUlComponentReused';

const MoviesList = ({ movies, pathname }) => {
  return <MoviesUlComponentReused movies={movies} pathname={pathname} />;
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
  pathname: PropTypes.string.isRequired,
};

export default MoviesList;
