import { createStore } from 'redux';
import beersReducer from './reducers/Beers.reducer';

const store = createStore(beersReducer);

export default store;
