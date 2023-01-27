import { Routes, Route } from 'react-router-dom';

import StarshipList from './StarshipList/StarshipList';
import Starship from './Starship/Starship';

function App() {
  return (
    <>
      <header>
        <h1>star wars starships</h1>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<StarshipList />}/>
          <Route path='/starship' element={<Starship />}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
