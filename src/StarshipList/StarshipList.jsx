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
              <div key={idx} className="starship-card">
                <Link to='/starship' state={{ship}}>
                  {ship.name}
                </Link>
              </div>
            )}
          </div>
        :
          <div className="starship-list">
            <img id='gif' src="/babyyoda.gif" alt="lightspeed gif"/>
          </div>
      }
    </>
  )
}

export default StarshipList