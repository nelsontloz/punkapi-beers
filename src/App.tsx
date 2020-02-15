import React, { useEffect, useState } from "react";
import "./App.scss";
import { getBeers, Beer } from "./services/Beers.service";
import { AxiosResponse } from "axios";
import BeerCard from "./components/BeerCard/BeerCard.component";

function App() {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    getBeers().then((response: AxiosResponse) => {
      setBeers(response.data);
    });
  }, []);

  return (
    <div className="App container">
      <div className="columns is-multiline">
        {beers.map((beer: Beer, index) => {
          return (
            <div
              className="column is-6-tablet is-4-desktop"
              key={`beer-${index}`}
            >
             <BeerCard {...beer}></BeerCard>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
