import { useEffect, useState } from "react";

import { getPilots } from "../services/sw-api";

const Pilots = (props) => {
  console.log('PROPS.PILOT ', props.pilots);

  const [pilotList, setPilotList] = useState([])

  useEffect (() => {
    const fetchPilots = async () => {
      const pilotData = await getPilots(props.pilots)
      setPilotList(pilotData)
    }
    fetchPilots()
  }, [])
  
  console.log('PILOT LIST ', pilotList);

  const nameList = pilotList.map(pilot => pilot.name)

  console.log(nameList);

  return (
    <>
      {pilotList.length
        ? <div className="pilots">
            {nameList.map((name, idx) =>
            idx < 4 &&
            <h3>{name}</h3>)}
          </div>
        : <h3>Loading Pilots...</h3>
      }
    </>
  )
}

export default Pilots