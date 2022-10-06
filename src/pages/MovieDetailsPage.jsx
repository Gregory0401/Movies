import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { fetchMovieDetails } from '../services/fetcherAPI';
import MovieDetails from '../components/MovieDetails';
import { useParams, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { BsFillCaretLeftFill } from 'react-icons/bs';

const Button = styled.button`
  border: 2px solid #ffffff;
  background-color: #b5bdf0;
  border-radius: 3px;
  height: 30px;
  margin-bottom: 20px;
  position: sticky;
  top: 80px;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    background-color: #a8b4ff;
  }
`;

const MovieDetailsPage = ({ itemFetcher }) => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const location = useLocation();
  const movieId = slug.match(/[a-z0-9]+$/)[0];

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const item = await fetchMovieDetails(movieId);
        setItem(item);
      } catch (error) {
        toast.error('Movie not found');
        return;
      }
    };

    fetchMovie();
  }, [movieId]);

  itemFetcher(item);

  const onGoBack = () => {
    navigate(`${location?.state?.from}`);
  };

  return (
    <>
      <Button type="button" onClick={onGoBack}>
        <BsFillCaretLeftFill size="10" fill="#ffffff" /> Go back
      </Button>
      {item && <MovieDetails item={item} location={location} slug={slug} />}
      <Outlet />
    </>
  );
};

MovieDetailsPage.propTypes = { itemFetcher: PropTypes.func.isRequired };

export default MovieDetailsPage;
