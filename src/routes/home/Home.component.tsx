import React, { useState, useEffect } from 'react';
import { getBeers } from '../../services/Beers.service';
import { AxiosResponse } from 'axios';
import BeersList from '../../components/BeersList/BeersList.component';
import Loader from '../../components/loader/Loader.component';
import PaginationNavRedux from '../../components/PaginationNav/PaginationNav.component.redux';
import { connect } from 'react-redux';

function Home(props: { currentPage: number }) {
  const [beers, setBeers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const subscription = getBeers(
      {},
      { per_page: 15, page: props.currentPage }
    ).subscribe((response: AxiosResponse) => {
      setBeers(response.data);
      setIsLoading(false);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [props.currentPage]);

  return (
    <div className="container">
      <div className="section">
        <PaginationNavRedux></PaginationNavRedux>
      </div>
      <div className="columns is-multiline">
        {isLoading ? <Loader></Loader> : <BeersList beers={beers}></BeersList>}
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    currentPage: state.page,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
