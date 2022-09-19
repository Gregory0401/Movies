import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchMovieCredits } from '../../../services/themoviedb.api';
import s from '../Cast/Cast.module.css'

export default function Cast() {
  const {movieId} = useParams();
  const { data} = useQuery(['movies', movieId, 'cast'],
    () => fetchMovieCredits(movieId));
  return (
   
        <div>
          <ul className={s.list}>
        {data &&
          data.cast.map(cast => (
            <li key={cast.id} className={s.item}>
              {cast.profile_path && (
                <img className={s.img}
                  src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                  alt={cast.name}
                  width="100"
                />
              )}
              <p> {cast.name}</p>
              <p className={s.character} >Character: {cast.character}</p>
            </li>
          ))}
      </ul>
       
    </div>
  );
};
