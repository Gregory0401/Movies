import PropTypes from 'prop-types';

const RejectedQuery = ({ searchQuery }) => {
  return <h1>Nothing found by "{searchQuery}" query</h1>;
};

RejectedQuery.propTypes = { searchQuery: PropTypes.string.isRequired };

export default RejectedQuery;
