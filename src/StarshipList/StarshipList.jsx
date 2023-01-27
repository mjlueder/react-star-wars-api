import { useState, useEffect } from "react"

import { getStarships } from "../services/sw-api"

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
      <h2>STARSHIPS!</h2>
      {starshipList.length 
        ?
          <>
            {starshipList.map((ship, idx) => 
              <div key={idx}>
                {ship.name}
              </div>
            )}
          </>
        :
          <>
            <h4>Loading Starships...</h4>
          </>
      }
    </>
  )
}

export default StarshipList