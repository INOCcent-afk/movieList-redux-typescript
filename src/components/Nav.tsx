import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../store";
import { loadMovies } from "../store/movies/moviesAction";
import { MovieList } from "../store/movies/moviesType";

const Nav = () => {
  const dispatch = useDispatch();

  const movies = useSelector<AppState, MovieList["movies"]>(
    (state) => state.moviesReducer.movies
  );

  useEffect(() => {
    dispatch(loadMovies());
  }, [dispatch]);

  return (
    <header>
      <h3>DAVE INOC</h3>
      <p>LIST OF ITEMS: {movies.length}</p>
    </header>
  );
};

export default Nav;
