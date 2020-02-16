import React, { useState, useEffect } from 'react';
import { getBeers } from '../../services/Beers.service';
import BeersList from '../../components/BeersList/BeersList.component';
import Loader from '../../components/loader/Loader.component';
import { connect } from 'react-redux';

function FavoriteBeers(props: { favoriteBeers: string[] }) {
  const [beers, setBeers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const subscription = getBeers({ ids: props.favoriteBeers }).subscribe(
      (response) => {
        setBeers(response.data);
        setIsLoading(false);
      }
    );
    return () => {
      subscription.unsubscribe();
    };
  }, [props.favoriteBeers]);

  return (
    <div className="container">
      {props.favoriteBeers.length === 0 ? (
        <div className="content has-text-centered">
          <h2>No favorite beers selected!</h2>
        </div>
      ) : isLoading ? (
        <Loader></Loader>
      ) : (
        <BeersList beers={beers}></BeersList>
      )}
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    favoriteBeers: state.favoriteBeers,
  };
};

export default connect(mapStateToProps)(FavoriteBeers);
