import { useParams } from "react-router-dom";

const Planet = () => {
  const { planetId } = useParams()
  console.log(planetId);

  

  return ( 
    <>  
      <h1>A planet!</h1>
    </>
  );
}

export default Planet;