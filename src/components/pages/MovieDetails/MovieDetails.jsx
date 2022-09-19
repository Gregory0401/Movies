import { NavLink, Outlet, useParams, useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchDetailMovie } from '../../../services/themoviedb.api';
import Container from '../../common/Container';
import { IMG_URL } from '../../../variables';
import { useOriginPath } from '../../../hooks/useOriginPath';
import s from '../MovieDetails/MovieDetails.module.css';
import BtnBack from '../../common/BtnBack/BtnBack';

export default function MovieDetails() {

  const location = useLocation();
  const originPath = useOriginPath();
  const {movieId} = useParams();
  const {isLoading, data, error} = useQuery(['movies', movieId],
    () => fetchDetailMovie(movieId));

  if (error) return <h1>Error: {error}</h1>
  if (isLoading) return <h1>Loading...</h1>
  const {title, overview, backdrop_path} = data;

  return (
    <Container>
      <h1 className={s.header} >
        MovieDetails
      </h1>  
      {/* <Link
        to={
          // location.state.from.pathname + location.state.from.search ??
          '/movies'}> */}
    <BtnBack />
{/* </Link> */}
      {error && <h1>Error: {error}</h1>}
      {isLoading && <h1>Loading...</h1>}
      {!error && !isLoading &&
        <div>
          <img className={s.img} src={`${IMG_URL}${backdrop_path}`} alt='poster' width={200} height={140}/>
          <h2>{title}</h2>
          <p>{overview}</p>
          <ul>
            <li><NavLink to={`${originPath}/cast`} state={location.state}>Cast</NavLink></li>
            <li><NavLink to={`${originPath}/reviews`} state={location.state}>Reviews</NavLink></li>
          </ul>
          <Outlet/>
        </div>
      }
    </Container>
  );
};
