import {
  selectBeer,
  removeFavoriteBeer,
  addFavoriteBeer,
  BeersState,
} from '../../redux/reducers/Beers.reducer';
import BeerCard from './BeerCard.component';
import { connect } from 'react-redux';

const mapStateToProps = (state: BeersState, ownProps: any) => {
  const id = ownProps.id;
  return {
    ...ownProps,
    isFavorite: state.favoriteBeers.indexOf(id) >= 0,
  };
};
const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    onAddToFavorite: () => {
      dispatch(addFavoriteBeer(ownProps.id));
    },
    onRemomveToFavorite: () => {
      dispatch(removeFavoriteBeer(ownProps.id));
    },
    onSelectBeer: () => {
      dispatch(selectBeer(ownProps.id));
    },
  };
};

const BeerCardRedux = connect(mapStateToProps, mapDispatchToProps)(BeerCard);
export default BeerCardRedux;
