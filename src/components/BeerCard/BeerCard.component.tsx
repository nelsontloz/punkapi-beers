import React from "react";
import "./BeerCard.scss";

function BeerCard({ name, tagline, image_url, description }: any) {
  return (
    <div className="beer-card card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image">
              <img src={image_url} alt={name}></img>
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{name}</p>
            <p className="subtitle is-6">{tagline}</p>
          </div>
        </div>
        {/* <div className="content">{description}</div> */}
      </div>
    </div>
  );
}

export default BeerCard;
