import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom";

import Pilots from "../Pilots/Pilots";

const Starship = (props) => {
  const location = useLocation()
  // console.log(location.state.ship.pilots);

  return (
    <>
      {/* {location.state.ship.pilot?.length &&
        <>
        <h2>Pilots:</h2>
        <Pilots pilots={location.state.ship.pilots}/>
        </>} */}
      <div className="starship-info">
        <h1>Name: {location.state.ship.name}</h1>
        <h2>Model: {location.state.ship.model}</h2>
        <h2>Hyperdrive Rating: {location.state.ship.hyperdrive_rating}</h2>
        <h2>Starship Class: {location.state.ship.starship_class}</h2>
        <Link to='/'>
          <button>Return to Starships</button>
        </Link>
      </div>
    </>

  )
}

export default Starship