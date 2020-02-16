import React, { useState, useEffect } from 'react';
import { getBeers } from '../../services/Beers.service';
import BeersList from '../../components/BeersList/BeersList.component';
import Loader from '../../components/loader/Loader.component';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router-dom';
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';

function FavoriteBeers(props: any) {
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
      <div className="section">
        <nav className="level is-mobile">
          <div className="level-left"></div>
          <div className="level-right">
            <div className="level-item">
              <button
                className="button"
                onClick={() => {
                  props.history.goBack();
                }}
              >
                <span className="icon">
                  <FontAwesomeIcon
                    icon={faArrowAltCircleLeft}
                  ></FontAwesomeIcon>
                </span>
                <span>Back</span>
              </button>
            </div>
          </div>
        </nav>
      </div>
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

export default connect(mapStateToProps)(withRouter(FavoriteBeers));
