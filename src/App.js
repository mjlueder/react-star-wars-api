import { Routes, Route } from 'react-router-dom';

import StarshipList from './StarshipList/StarshipList';
import Starship from './Starship/Starship';
import NavBar from './NavBar/NavBar';



function App() {
  return (
    <>
      <NavBar />
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
