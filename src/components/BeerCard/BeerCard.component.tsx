import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartReg } from '@fortawesome/free-regular-svg-icons';
import './BeerCard.scss';

type BeerCardProps = {
  name: string;
  tagline: string;
  image_url: string;
  isFavorite?: boolean;
  onAddToFavorite?: () => void;
  onRemomveToFavorite?: () => void;
  onSelectBeer?: () => void;
};

function BeerCard(props: BeerCardProps) {
  return (
    <div className="beer-card card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image" onClick={props.onSelectBeer}>
              <img src={props.image_url} alt={props.name}></img>
            </figure>
          </div>
          <div className="media-content" onClick={props.onSelectBeer}>
            <p className="title is-4">{props.name}</p>
            <p className="subtitle is-6">{props.tagline}</p>
          </div>
          <div className="favorite has-text-danger">
            <FontAwesomeIcon
              icon={props.isFavorite ? faHeart : faHeartReg}
              size="lg"
              onClick={
                props.isFavorite
                  ? props.onRemomveToFavorite
                  : props.onAddToFavorite
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BeerCard;
