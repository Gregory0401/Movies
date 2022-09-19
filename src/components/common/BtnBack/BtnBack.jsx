
import { useLocation, useNavigate } from 'react-router-dom';
import s from '../BtnBack/BtnBack.module.css';


function BtnBack() {
    const location = useLocation();
    const navigate= useNavigate();
    const OnClickHandle =() =>{
       navigate({
           pathname:location.state.location?.pathname || '/home',
           ...(location.state.query && {search:`query=${location.state.query}`})
       })
    }
  return (     
        <button onClick={OnClickHandle} className={s.button}>Go back</button>
  );
}
export default BtnBack
