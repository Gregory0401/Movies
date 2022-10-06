import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLi = styled.li`
  list-style: none;
  background-color: #e2e3e9;
  padding: 20px;
  border-radius: 3px;
  &:nth-child(2n) {
    background-color: #d1d6fa;
  }
`;

const StyledUl = styled.ul`
  padding-inline-start: 0;
`;

const StyledP = styled.p`
  font-weight: 500;
`;

const MovieReviewsSubPage = ({ item }) => {
  const { reviews } = item;
  const results = reviews.results;

  return (
    <>
      {results.length === 0 && (
        <StyledP>We don't have any reviews for this movie.</StyledP>
      )}
      <StyledUl>
        {results.map(result => (
          <StyledLi key={result.id}>
            <StyledP>Author: {result.author}</StyledP>
            <p>{result.content}</p>
          </StyledLi>
        ))}
      </StyledUl>
    </>
  );
};

MovieReviewsSubPage.propTypes = {
  item: PropTypes.shape({
    reviews: PropTypes.shape({ results: PropTypes.arrayOf(PropTypes.object) }),
  }),
};

export default MovieReviewsSubPage;
