import React, { useState, useEffect } from 'react';
import { getBeers } from '../../services/Beers.service';
import { AxiosResponse } from 'axios';
import BeersList from '../../components/BeersList/BeersList.component';

function Home() {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    const subscription = getBeers({}, { per_page: 30, page: 1 }).subscribe(
      (response: AxiosResponse) => {
        setBeers(response.data);
      }
    );
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <div className="container">
      <div className="columns is-multiline">
        <BeersList beers={beers}></BeersList>
      </div>
    </div>
  );
}

export default Home;
