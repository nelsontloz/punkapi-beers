import { Beer } from '../../services/Beers.service';

export const UPDATE_BEERS = 'beers/updateBeers';
export const SELECT_BEER = 'beers/selectBeer';
export const ADD_FAVORITE_BEER = 'beers/addFavoriteBeer';
export const REMOVE_FAVORITE_BEER = 'beers/removeFavoriteBeer';

export function updateBeers(beers: Beer[]) {
  return {
    type: UPDATE_BEERS,
    beers,
  };
}

export function selectBeer(beer: string | null) {
  return {
    type: SELECT_BEER,
    id: beer,
  };
}

export function addFavoriteBeer(id: string | null) {
  return {
    type: ADD_FAVORITE_BEER,
    id,
  };
}

export function removeFavoriteBeer(id: string | null) {
  return {
    type: REMOVE_FAVORITE_BEER,
    id,
  };
}

export type BeersState = {
  selectedBeer: string | null;
  beers: Beer[];
  favoriteBeers: string[];
};

const initialState: BeersState = {
  selectedBeer: null,
  beers: [],
  favoriteBeers: [],
};

function beersReducer(state: any, action: any) {
  if (typeof state === 'undefined') {
    return initialState;
  }
  switch (action.type) {
    case UPDATE_BEERS:
      return {
        ...state,
        beers: [...action.beers],
      };
    case SELECT_BEER:
      return {
        ...state,
        selectedBeer: action.id,
      };
    case ADD_FAVORITE_BEER:
      return {
        ...state,
        favoriteBeers: [...state.favoriteBeers, action.id],
      };
    case REMOVE_FAVORITE_BEER:
      return {
        ...state,
        favoriteBeers: [
          ...state.favoriteBeers.filter((beerId: string) => {
            return action.id !== beerId;
          }),
        ],
      };
    default:
      return state;
  }
}

export default beersReducer;
