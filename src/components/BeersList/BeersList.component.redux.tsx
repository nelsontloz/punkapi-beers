import { connect } from 'react-redux';
import { BeersState } from '../../redux/reducers/Beers.reducer';
import BeersList from './BeersList.component';

const mapStateToProps = (state: BeersState) => {
  return {
    beers: state.beers,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

const BeersListRedux = connect(mapStateToProps, mapDispatchToProps)(BeersList);
export default BeersListRedux;
