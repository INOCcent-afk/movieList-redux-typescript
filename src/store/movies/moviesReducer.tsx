import { MovieList } from "./moviesType";
import { Action } from "./moviesAction";

const initState = {
  movies: [
    {
      name: "Harry Potter",
      price: 300,
      id: 1234,
    },
    {
      name: "Naruto Shippuden",
      price: 500,
      id: 12345,
    },
    {
      name: "One Piece",
      price: 900,
      id: 12346,
    },
  ],
};

const moviesReducer = (state: MovieList = initState, action: Action) => {
  switch (action.type) {
    case "GET_MOVIES": {
      return { ...state };
    }
    case "ADD_MOVIE": {
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    }
    case "REMOVE_MOVIE": {
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.payload),
      };
    }
    default:
      return state;
  }
};

export default moviesReducer;
