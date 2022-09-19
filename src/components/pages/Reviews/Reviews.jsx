import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchMovieReviews } from '../../../services/themoviedb.api';


export default function Reviews() {

const {movieId} = useParams();
const {data} = useQuery(['movies', movieId, 'review'],

    () => fetchMovieReviews(movieId));
  return (
    <div>
      <ul>
        {data && data?.total_results !== 0
          ? data?.results.map(data => (
              <li key={data.id}>
                <h3>Author: {data.author}</h3>
                <p>{data.content}</p>
              </li>
            ))
          : 'No reviews for this film.'}
      </ul>
    </div>
  );
};

