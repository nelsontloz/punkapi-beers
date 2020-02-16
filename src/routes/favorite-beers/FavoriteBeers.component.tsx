import React, { useState, useEffect } from 'react';
import store from '../../redux/Store';
import { BeersState } from '../../redux/reducers/Beers.reducer';
import { getBeers } from '../../services/Beers.service';
import BeersList from '../../components/BeersList/BeersList.component';

function FavoriteBeers() {
  const [beers, setBeers] = useState([]);
  const state: BeersState = store.getState();
  useEffect(() => {
    const subscription = getBeers({ ids: state.favoriteBeers }).subscribe(
      (response) => {
        setBeers(response.data);
      }
    );
    return () => {
      subscription.unsubscribe();
    };
  }, [state.favoriteBeers]);

  return (
    <div className="container">
      <BeersList beers={beers}></BeersList>
    </div>
  );
}

export default FavoriteBeers;
