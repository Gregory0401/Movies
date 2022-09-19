import { fetchTrendingMovies } from '../../../services/themoviedb.api';
import { useQuery } from 'react-query';
import { Link, useLocation } from 'react-router-dom';
import Container from '../../common/Container';
import { IMG_URL } from '../../../variables';
import s from '../Home/Home.module.css'

export default function Home() {
  const {isLoading, data, error} = useQuery('trendingMovies', fetchTrendingMovies)
  const location = useLocation();

  if (error) return <h1>Error: {error}</h1>
  if (isLoading) return <h1>Loading...</h1>
  return (
    <>
      <Container >
        <h1 className={s.h1} >
          TOP MOVIES TODAY
        </h1>
        <ul className={s.Container} >
          {data?.results?.map(({ id, title, poster_path }) => (
            <li className={s.film} key={id} style={{display: 'flex', gap: 15}}>

              <div className={s.card}>
                <Link to={`/movies/${id}`} state={{from: location, something:''}} >
                  <img src={`${IMG_URL}${poster_path}`} alt='poster' width={40} height={40}/>             
                </Link>
                <p className={s.title} >{title}</p>
              </div>

            </li>
          ))}
        </ul>
      </Container>
    </>
  );
};
