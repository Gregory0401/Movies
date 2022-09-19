import { fetchTrendingMovies } from '../../../services/themoviedb.api';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Container from '../../common/Container';
import { IMG_URL } from '../../../variables';

export default function Home() {
  const {isLoading, data, error} = useQuery('trendingMovies', fetchTrendingMovies)

  if (error) return <h1>Error: {error}</h1>
  if (isLoading) return <h1>Loading...</h1>
  return (
    <>
      <Container>
        <h1>
          Home
        </h1>
        <ul style={{display: 'flex', flexDirection: 'column', gap: 15}}>
          {data?.results?.map(({ id, title, poster_path }) => (
            <li key={id} style={{display: 'flex', gap: 15}}>

              <div className='movie-card'>
                <Link to={`/movies/${id}`}>
                  <img src={`${IMG_URL}${poster_path}`} alt='poster' width={40} height={40}/>
                </Link>
                {title}
              </div>

            </li>
          ))}
        </ul>
      </Container>
    </>
  );
};
