import axios from "axios";
import { format } from "date-fns";

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
  perPage?: number;
};

function formatIds(ids: string[]) {
  return ids.reduce((prev, curr) => {
    return `${prev}|${curr}`;
  });
}

export function getBeers(filters: BeerFilters, pagination?: BeerPagination) {
  var ids: string | null = null;
  if (filters && filters.ids) {
    ids = formatIds(filters?.ids || []);
  }
  return axios.get(`${process.env.REACT_APP_API_URL}/beers`, {
    params: { ...filters, ...pagination, ids },
  });
}
