import React, { useState, useEffect } from 'react';
import { useLocation, withRouter } from 'react-router-dom';
import { getBeers, Beer, Malt, Hop } from '../../services/Beers.service';
import Loader from '../../components/loader/Loader.component';
import './BeerDetails.component.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function BeerDetails(props: any) {
  const [beers, setBeer] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const beerId = useQuery().get('id');

  useEffect(() => {
    if (!beerId) {
      return;
    }
    const subscription = getBeers({ ids: [beerId] }).subscribe((response) => {
      setBeer(response.data);
      setIsLoading(false);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [beerId]);

  return (
    <div className="beer-details container">
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <div>
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

          <div className="columns">
            {beers.map((beer: Beer, index: number) => {
              return (
                <div className="column" key={`beer-${index}`}>
                  <div className="content is-medium beer-header">
                    <div className="image">
                      <img alt={beer.name} src={beer.image_url}></img>
                    </div>
                    <div className="text">
                      <h1 className="has-text-weight-bold">{beer.name}</h1>
                      <p className="has-text-weight-semibold">{beer.tagline}</p>
                      <small>
                        <strong>Contributed by: </strong>
                        {beer.contributed_by}
                      </small>
                    </div>
                  </div>
                  <div className="content is-medium">
                    <h3>Description</h3>
                    <p>{beer.description}</p>
                    <h3>Ingredients</h3>
                    Malt:
                    <ul>
                      {beer.ingredients.malt.map((malt: Malt, index) => {
                        return (
                          <li
                            key={`malt-${index}`}
                          >{`${malt.name} - ${malt.amount.value}: ${malt.amount.unit}`}</li>
                        );
                      })}
                    </ul>
                    Hop:
                    <ul>
                      {beer.ingredients.hops.map((malt: Hop, index) => {
                        return (
                          <li
                            key={`Hop-${index}`}
                          >{`${malt.name} - ${malt.amount.value}: ${malt.amount.unit}`}</li>
                        );
                      })}
                    </ul>
                    <p>{beer.ingredients.yeast}</p>
                    <h3>Tips for brewers</h3>
                    <p>{beer.brewers_tips}</p>
                    <h3>Food pairing</h3>
                    <ul>
                      {beer.food_pairing.map((pairing: string, index) => {
                        return <li key={`pairing-${index}`}>{pairing}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default withRouter(BeerDetails);
