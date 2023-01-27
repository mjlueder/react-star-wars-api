import './App.css';

import { Routes, Route } from 'react-router-dom';

import StarshipList from './StarshipList/StarshipList';

function App() {
  return (
    <>
      <header>
        <h1>STAR WARS STARSHIPS</h1>
      </header>
      <StarshipList />
      <Routes>

      </Routes>
    </>
  );
}

export default App;
