import { Routes, Route } from 'react-router-dom';

import StarshipList from './StarshipList/StarshipList';
import Starship from './Starship/Starship';
import NavBar from './NavBar/NavBar';
import PlanetList from './PlanetList/PlanetList'
import Planet from './Planet/Planet';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<StarshipList />}/>
          <Route path='/starship' element={<Starship />}/>
          <Route path='/planets' element={<PlanetList />}/>
          <Route path='/planets/:planetId' element={<Planet />}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
