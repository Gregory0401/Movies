import { NavLink, Outlet, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchDetailMovie } from '../../../services/themoviedb.api';
import Container from '../../common/Container';
import { IMG_URL } from '../../../variables';
import { useOriginPath } from '../../../hooks/useOriginPath';

export default function MovieDetails() {
  const originPath = useOriginPath();
  const {movieId} = useParams();
  const {isLoading, data, error} = useQuery(['movies', movieId],
    () => fetchDetailMovie(movieId));

  if (error) return <h1>Error: {error}</h1>
  if (isLoading) return <h1>Loading...</h1>
  const {title, overview, backdrop_path} = data;
  return (
    <Container>
      <h1>
        MovieDetails
      </h1>
      {error && <h1>Error: {error}</h1>}
      {isLoading && <h1>Loading...</h1>}
      {!error && !isLoading &&
        <div>
          <img src={`${IMG_URL}${backdrop_path}`} alt='poster' width={200} height={140}/>
          <h2>{title}</h2>
          <p>{overview}</p>
          <ul>
            <li><NavLink to={`${originPath}/cast`}>Cast</NavLink></li>
            <li><NavLink to={`${originPath}/reviews`}>Reviews</NavLink></li>
          </ul>
          <Outlet/>
        </div>
      }
    </Container>
  );
};
