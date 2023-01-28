import millenium from '../assets/millenium.png'
import r2d2 from '../assets/r2d2.png'

const NavBar = () => {
  return (
    <>
      <header>
        <img src={r2d2} alt="r2d2" id='r2-icon'/>
        <h1>star wars starships</h1>
        <img src={millenium} alt="millenium falcon" id='mf-icon'/>
      </header>
    </>
  )
}

export default NavBar