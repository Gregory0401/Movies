import { NavLink, useLocation } from 'react-router-dom';
import { useOriginPath } from '../../../hooks/useOriginPath';

export default function MoviesSearchList({movies, query}) {
  const originPath = useOriginPath();
  const location = useLocation();
  return (
    <ul>
      {movies.map(({id, title}) => (
        <li key={id}><NavLink to={`${originPath}/${id}`} state={{location, query}}>{title}</NavLink></li>
      ))}
    </ul>
  )
}
