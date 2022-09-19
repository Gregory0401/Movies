import { NavLink, Route, Routes } from 'react-router-dom';
import s from './NavBar.module.css';
import Container from '../Container';
import { useContext } from 'react';
import { moviesSearchValueCtx } from '../../../context/MoviesSearchValue/moviesSearchValueCtx';

export default function NavBar() {
  const {totalResults, moviesCount} = useContext(moviesSearchValueCtx);

  return (
    <div className={s.container}>
      <Container>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <nav className={s.nav}>
            <NavLink className={s.link} to='/home/'>Home</NavLink>
            <NavLink className={s.link} to='/home/movies'>Movies</NavLink>
          </nav>
          <Routes>
            <Route path='/home/' element={false}/>
            <Route path='/home/movies' element={
              <div className={s.stat}>Results: {moviesCount}/{totalResults}</div>
            } />
            <Route path='*' element={false} />
          </Routes>
        </div>
      </Container>
    </div>
  );
};
