export type MovieList = {
  movies: Array<Movie>;
};

export type Movie = {
  name: string;
  price: number;
  id: number;
};

export interface GetMovie {
  type: "GET_MOVIES";
}

export interface AddMovie {
  type: "ADD_MOVIE";
  payload: Movie;
}

export interface RemoveMovie {
  type: "REMOVE_MOVIE";
  payload: number;
}
