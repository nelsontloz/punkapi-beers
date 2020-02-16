export const SELECT_BEER = 'beers/selectBeer';
export const ADD_FAVORITE_BEER = 'beers/addFavoriteBeer';
export const REMOVE_FAVORITE_BEER = 'beers/removeFavoriteBeer';
export const NEXT_PAGE = 'beers/nextPage';
export const PREVIOUS_PAGE = 'beers/previousPage';

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

export function nextPage() {
  return {
    type: NEXT_PAGE,
  };
}

export function previousPage() {
  return {
    type: PREVIOUS_PAGE,
  };
}

export type BeersState = {
  selectedBeer: string | null;
  favoriteBeers: string[];
  page: number;
};

const initialState: BeersState = {
  selectedBeer: null,
  favoriteBeers: [],
  page: 1,
};

function beersReducer(state: any, action: any) {
  if (typeof state === 'undefined') {
    return initialState;
  }
  switch (action.type) {
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
    case NEXT_PAGE:
      return { ...state, page: ++state.page };
    case PREVIOUS_PAGE:
      return {
        ...state,
        page: state.page <= 1 ? 1 : --state.page,
      };
    default:
      return state;
  }
}

export default beersReducer;
