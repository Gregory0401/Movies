import NavBar from '../NavBar';
import s from './Header.module.css'
import { Route, Routes } from 'react-router-dom';
import Searchbar from '../Searchbar';

export default function Header() {
  return (
    <header className={s.container}>
      <NavBar />
      <Routes>
        <Route path='/' element={false}/>
        <Route path='/movies' element={<Searchbar />} />
        <Route path='*' element={false} />
      </Routes>
    </header>
  )
}
