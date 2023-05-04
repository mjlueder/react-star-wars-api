import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPlanet } from "../services/sw-api"
import Pilots from "../Pilots/Pilots";
import { Link } from "react-router-dom";

const Planet = () => {
  const [planet, setPlanet] = useState(null)

  const { planetId } = useParams()
  console.log(planetId);

  useEffect (() => {
    const fetchPlanet = async () => {
      const planetData = await getPlanet(planetId)
      setPlanet(planetData)
    }
    fetchPlanet()
  }, [planetId])

  console.log(planet);

  return ( 
    <>  
      {planet 
        ?
          <>
            <h1>{planet.name}</h1>
            <h3>Climate: {planet.climate}</h3>
            <h3>Terrain: {planet.terrain}</h3>
            <h3>Gravity: {planet.gravity}</h3>
            <br />
            {planet.residents.length 
              ?
              <>
                <h2>People:</h2>
                <Pilots pilots={planet.residents}/>
              </>
              : <></>
            }
            <Link to='/planets'>Back to Planets</Link>
          </>
        :
          <div className="starship-gif">
            <img id='gif' src="/babyyoda.gif" alt="baby yoda gif"/>
          </div>
      }
    </>
  );
}

export default Planet;