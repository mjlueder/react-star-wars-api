import { useState, useEffect } from "react"
import { getPlanets } from "../services/sw-api"

import { Link } from "react-router-dom"

const PlanetList = () => {
  const [planetList, setPlanetList] = useState([])

  useEffect (() => {
    const fetchPlanets = async () => {
      const planetData = await getPlanets()
      setPlanetList(planetData.results)
    }
    fetchPlanets()
  }, [])

  console.log(planetList);

  return (
    <>
      <h1>Planets!</h1>
      {planetList.length
        ?
          <div className="starship-list">
            {planetList.map((planet, idx) => (
              <Link key={planet.name}
                to={`/planets/${idx +1}`}
              >
                <div className="starship-card">{planet.name}</div>
              </Link>
            ))}
          </div>
        :
          <div className="starship-gif">
            <img id='gif' src="/babyyoda.gif" alt="baby yoda gif"/>
          </div>
      }
    </>
  )
}

export default PlanetList