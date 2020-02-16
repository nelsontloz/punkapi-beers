import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getBeers, Beer } from '../../services/Beers.service';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function BeerDetails() {
  const [beers, setBeer] = useState([]);
  const query = useQuery();
  useEffect(() => {
    const id = query.get('id');
    if (!id) {
      return;
    }
    const subscription = getBeers({ ids: [id] }).subscribe((response) => {
      setBeer(response.data);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [query]);

  return (
    <div className="beer-details container">
      <div className="section">
        <div className="columns">
          {beers.map((beer: Beer, index: number) => {
            return (
              <div className="column" key={`beer-${index}`}>
                <div className="content is-medium">
                  <h1 className="has-text-weight-bold">{beer.name}</h1>
                  <p className="has-text-weight-semibold">{beer.tagline}</p>
                  <h2>Description</h2>
                  <p>{beer.description}</p>
                  <ul>
                    <li>
                      In fermentum leo eu lectus mollis, quis dictum mi aliquet.
                    </li>
                    <li>
                      Morbi eu nulla lobortis, lobortis est in, fringilla felis.
                    </li>
                    <li>
                      Aliquam nec felis in sapien venenatis viverra fermentum
                      nec lectus.
                    </li>
                    <li>Ut non enim metus.</li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BeerDetails;
