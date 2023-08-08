import './App.css';
import HomePage from './pages/HomePage';
import BeerPage from './pages/BeerPage';
import RandomBeerPage from './pages/RandomBeerPage';
import NewBeerPage from './pages/NewBeerPage';
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import BeerDetails from './components/BeerDetails';

function App() {
  const [beers, setBeers] = useState([])
  const [randomBeer, setRandomBeer] = useState([])
  
  const addNewBeer = (newBeer) => {
    const updatedBeers = [...beers, newBeer];
    setBeers(updatedBeers);
  };

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then((response) => {
      setBeers(response.data)
    })
  }, [])

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
    .then((response) => {
      setRandomBeer(response.data)
    })
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/beers" element={<BeerPage beers={beers} />}/>
        <Route path="/random-beer" element={<RandomBeerPage randomBeer={randomBeer} />} />
        <Route path="/new-beer" element={<NewBeerPage addNewBeer={addNewBeer} />} />
        <Route path="/beers/:beerId" element={<BeerDetails beers={beers} />} />
      </Routes>
    </div>
  );
}

export default App;
