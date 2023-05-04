import millenium from '../assets/millenium-small.png'
import r2d2 from '../assets/r2d2-small.png'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <header>
        <NavLink to='/'>
          <p>starships</p>
          <img src={millenium} alt="millenium falcon" id='mf-icon'/>
        </NavLink>
        <h1>star wars</h1>
        <NavLink to='/planets'>
          <img src={r2d2} alt="r2d2" id='r2-icon'/>
          <p>planets</p>
        </NavLink>
      </header>
    </>
  )
}

export default NavBar