import millenium from '../assets/millenium.png'
import r2d2 from '../assets/r2d2.png'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <header>
        <NavLink to='/'>
          <img src={r2d2} alt="r2d2" id='r2-icon'/>
          <p>starships</p>
        </NavLink>
        <h1>star wars</h1>
        <NavLink to='/planets'>
          <p>planets</p>
          <img src={millenium} alt="millenium falcon" id='mf-icon'/>
        </NavLink>
      </header>
    </>
  )
}

export default NavBar