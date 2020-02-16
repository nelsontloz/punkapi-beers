import React from 'react';
import { getBeers } from '../../services/Beers.service';
import { AxiosResponse } from 'axios';
import BeersListRedux from '../../components/BeersList/BeersList.component.redux';
import store from '../../redux/Store';
import { updateBeers } from '../../redux/reducers/Beers.reducer';

function Home() {
  getBeers({}, { per_page: 30, page: 1 }).then((response: AxiosResponse) => {
    store.dispatch(updateBeers(response.data));
  });

  return (
    <div className="container">
      <div className="columns is-multiline">
        <BeersListRedux></BeersListRedux>
      </div>
    </div>
  );
}

export default Home;
