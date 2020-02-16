import { connect } from 'react-redux';
import PaginationNav from './PaginationNav.component';
import { nextPage, previousPage } from '../../redux/reducers/Beers.reducer';

const mapStateToProps = (state: any) => {
  return {
    currentPage: state.page,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    onNextPage: () => {
      dispatch(nextPage());
    },
    onPreviousPage: () => {
      dispatch(previousPage());
    },
  };
};

const PaginationNavRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginationNav);
export default PaginationNavRedux;
