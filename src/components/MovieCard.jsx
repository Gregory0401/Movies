import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BsXOctagonFill } from 'react-icons/bs';

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FLexGrowDiv = styled.div`
  flex-grow: 1;
`;

const StyledSpan = styled.span`
  font-size: 1.5em;
  font-weight: 600;
`;

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 460px;
`;

const MovieCard = ({ movie }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/w500/';

  const { original_title, poster_path, release_date } = movie;

  let slicedTitle = original_title.slice(0, 25);
  if (slicedTitle.length < original_title.length) {
    slicedTitle += '...';
  }

  return (
    <FlexDiv>
      <FLexGrowDiv>
        {!poster_path && <BsXOctagonFill size="275" fill="#b5bdf0" />}
        {poster_path && (
          <img
            src={`${BASE_URL}${poster_path}`}
            alt={original_title}
            width="275"
          />
        )}
      </FLexGrowDiv>
      <StyledDiv>
        <h2>{slicedTitle}</h2>
        <StyledSpan>{Number.parseInt(release_date)}</StyledSpan>
      </StyledDiv>
    </FlexDiv>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    original_title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    release_date: PropTypes.string.isRequired,
  }),
};

export default MovieCard;
