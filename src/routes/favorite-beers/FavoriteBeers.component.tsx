import React, { useState, useEffect } from 'react';
import store from '../../redux/Store';
import { BeersState } from '../../redux/reducers/Beers.reducer';
import { getBeers } from '../../services/Beers.service';
import BeersList from '../../components/BeersList/BeersList.component';
import Loader from '../../components/loader/Loader.component';

function FavoriteBeers() {
  const [beers, setBeers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let state: BeersState = store.getState();

  useEffect(() => {
    const subscription = getBeers({ ids: state.favoriteBeers }).subscribe(
      (response) => {
        setBeers(response.data);
        setIsLoading(false);
      }
    );
    return () => {
      subscription.unsubscribe();
    };
  }, [state.favoriteBeers]);

  return (
    <div className="container">
      {isLoading ? <Loader></Loader> : <BeersList beers={beers}></BeersList>}
    </div>
  );
}

export default FavoriteBeers;
