import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import { getStarships } from "../services/sw-api"
import Starship from "../Starship/Starship"

const StarshipList = () => {
  const [starshipList, setStarshipList ] = useState([])

  useEffect (() => {
    const fetchStarships = async () => {
      const starshipData = await getStarships()
      setStarshipList(starshipData.results)
    }
    fetchStarships()
  }, [])

  return (
    <>
      {starshipList.length 
        ?
          <div className="starship-list">
            {starshipList.map((ship, idx) => 
              <Link key={idx} to='/starship' state={{ship}}>
                <div className="starship-card">
                  {ship.name}
                </div>
              </Link>
            )}
          </div>
        :
          <div className="starship-gif">
            <img id='gif' src="/babyyoda.gif" alt="lightspeed gif"/>
          </div>
      }
    </>
  )
}

export default StarshipList