import React from 'react';
import './App.scss';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/home/Home.component';
import BeerDetails from './routes/beer-details/BeerDetails.component';
import Navbar from './components/Navbar/Navbar.component';
import FavoriteBeers from './routes/favorite-beers/FavoriteBeers.component';

function App() {
  return (
    <div className="App ">
      <HashRouter>
        <Navbar></Navbar>
        <Route exact path="/" component={Home} />
        <Route exact path="/favorite-beers" component={FavoriteBeers} />
        <Route exact path="/beer-details" component={BeerDetails} />
      </HashRouter>
    </div>
  );
}

export default App;
