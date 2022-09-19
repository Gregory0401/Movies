import { NavLink } from 'react-router-dom';
import { useOriginPath } from '../../../hooks/useOriginPath';

export default function MoviesSearchList({movies}) {
  const originPath = useOriginPath();
  return (
    <ul>
      {movies.map(({id, title}) => (
        <li key={id}><NavLink to={`${originPath}/${id}`}>{title}</NavLink></li>
      ))}
    </ul>
  )
}
