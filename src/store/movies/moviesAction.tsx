import { Dispatch } from "redux";
import { GetMovie, AddMovie, RemoveMovie } from "./moviesType";

export type Action = GetMovie | AddMovie | RemoveMovie;

export const loadMovies = () => async (dispatch: Dispatch<Action>) => {
  dispatch({
    type: "GET_MOVIES",
  });
};

export const addMovie = (name: string, price: string) => {
  return {
    type: "ADD_MOVIE",
    payload: {
      name: name,
      price: price,
      id: Math.floor(Math.random() * 1000),
    },
  };
};

export const removeMovie = (id: number) => {
  return {
    type: "REMOVE_MOVIE",
    payload: id,
  };
};
