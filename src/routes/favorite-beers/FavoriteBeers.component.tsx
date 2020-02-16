import React from 'react';
import store from '../../redux/Store';
import { BeersState, updateBeers } from '../../redux/reducers/Beers.reducer';
import { getBeers } from '../../services/Beers.service';
import BeersListRedux from '../../components/BeersList/BeersList.component.redux';

function FavoriteBeers() {
  const state: BeersState = store.getState();
  getBeers({ ids: state.favoriteBeers }).then((response) => {
    store.dispatch(updateBeers(response.data));
  });

  return <div className="container">
      <BeersListRedux></BeersListRedux>
  </div>;
}

export default FavoriteBeers;
