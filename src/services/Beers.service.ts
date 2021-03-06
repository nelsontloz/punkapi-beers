import Axios from 'axios-observable';

export interface Volume {
  value: number;
  unit: string;
}

export interface BoilVolume {
  value: number;
  unit: string;
}

export interface Temp {
  value: number;
  unit: string;
}

export interface MashTemp {
  temp: Temp;
  duration?: number;
}

export interface Temp2 {
  value: number;
  unit: string;
}

export interface Fermentation {
  temp: Temp2;
}

export interface Method {
  mash_temp: MashTemp[];
  fermentation: Fermentation;
  twist: string;
}

export interface Amount {
  value: number;
  unit: string;
}

export interface Malt {
  name: string;
  amount: Amount;
}

export interface Amount2 {
  value: number;
  unit: string;
}

export interface Hop {
  name: string;
  amount: Amount2;
  add: string;
  attribute: string;
}

export interface Ingredients {
  malt: Malt[];
  hops: Hop[];
  yeast: string;
}

export type Beer = {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu?: number;
  target_fg: number;
  target_og: number;
  ebc?: number;
  srm?: number;
  ph?: number;
  attenuation_level: number;
  volume: Volume;
  boil_volume: BoilVolume;
  method: Method;
  ingredients: Ingredients;
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
};

type BeerFilters = {
  abv_gt?: number;
  abv_lt?: number;
  ibu_gt?: number;
  ibu_lt?: number;
  ebc_gt?: number;
  ebc_lt?: number;
  beer_name?: string;
  yeast?: string;
  brewed_before?: string;
  brewed_after?: string;
  hops?: string;
  malt?: string;
  food?: string;
  ids?: string[];
};

type BeerPagination = {
  page?: number;
  per_page?: number;
};

function formatIds(ids: string[]) {
  if (ids.length === 0) {
    return '';
  }
  return ids.reduce((prev, curr) => {
    return `${prev}|${curr}`;
  });
}

export function getBeers(filters?: BeerFilters, pagination?: BeerPagination) {
  var ids: string | null = null;
  if (filters && filters.ids) {
    ids = formatIds(filters?.ids || []);
  }
  return Axios.get(`${process.env.REACT_APP_API_URL}/beers`, {
    params: { ...filters, ...pagination, ids },
  });
}
