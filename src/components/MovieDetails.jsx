import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BsXOctagonFill } from 'react-icons/bs';

const StyledNavLink = styled(NavLink)`
  font-weight: 500;
  color: #ffffff;

  &.active {
    color: #000000;
  }
`;

const StyledAdditionalDiv = styled.div`
  border: 3px solid;
  border-color: #b5bdf0;
  border-radius: 3px;
  background-color: #b5bdf0;
  margin-top: 30px;
  padding: 20px;
`;

const StyledLi = styled.li`
  color: #ffffff;
  list-style: none;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const StyledDiv = styled.div`
  display: flex;
`;

const ContentDiv = styled.div`
  margin-left: 30px;
`;

const StyledP = styled.p`
  font-weight: 500;
`;

const StyledPAdd = styled(StyledP)`
  color: #ffffff;
  margin-top: 0;
  margin-bottom: 10px;
`;

const StyledUl = styled.ul`
  margin: 0;
`;

const MovieDetails = ({ item, location, slug }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/w500/';

  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
    videos,
  } = item;

  const videoId = videos?.results?.find(v => v.type === 'Trailer')?.key;

  return (
    <>
      <StyledDiv>
        {!poster_path && <BsXOctagonFill size="275" fill="#b5bdf0" />}
        {poster_path && (
          <img
            src={`${BASE_URL}${poster_path}`}
            alt={original_title}
            width="500"
          />
        )}
        <ContentDiv>
          <h1>{`${original_title} (${Number.parseInt(release_date)})`}</h1>
          <StyledP>User Score: {vote_average}</StyledP>
          <h2>Overview</h2>
          <StyledP>{overview}</StyledP>
          <h3>Genres</h3>
          <StyledP>
            {genres.length === 0 && 'N/A'}
            {genres.map(genre => (
              <span key={genre.id}>{`${genre.name} `}</span>
            ))}
          </StyledP>
          {videoId && (
            <>
              <h4>Trailer</h4>
              <iframe
                width="560"
                height="315"
                title="movieTrailer"
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </>
          )}
        </ContentDiv>
      </StyledDiv>
      <StyledAdditionalDiv>
        <StyledPAdd>Additional information</StyledPAdd>
        <StyledUl>
          <StyledLi>
            <StyledNavLink
              to={`/movies/${slug}/cast`}
              state={{ from: location?.state?.from ?? '/' }}
            >
              Cast
            </StyledNavLink>
          </StyledLi>
          <StyledLi>
            <StyledNavLink
              to={`/movies/${slug}/reviews`}
              state={{ from: location?.state?.from ?? '/' }}
            >
              Reviews
            </StyledNavLink>
          </StyledLi>
        </StyledUl>
      </StyledAdditionalDiv>
    </>
  );
};

MovieDetails.propTypes = {
  item: PropTypes.shape({
    poster_path: PropTypes.string,
    original_title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.object),
    videos: PropTypes.object,
  }),
  location: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
};

export default MovieDetails;
