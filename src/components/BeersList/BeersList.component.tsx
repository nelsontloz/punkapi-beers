import React from 'react';
import { Beer } from '../../services/Beers.service';
import BeerCardRedux from '../BeerCard/BeerCard.component.redux';

type BeerListProps = {
  beers: Beer[];
};
function BeersList(props: BeerListProps) {
  return (
    <div className="columns is-multiline">
      {props.beers.map((beer: Beer, index: number) => {
        return (
          <div
            className="column is-6-tablet is-4-desktop"
            key={`beer-${index}`}
          >
            <BeerCardRedux {...beer}></BeerCardRedux>
          </div>
        );
      })}
    </div>
  );
}

export default BeersList;