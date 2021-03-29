import React, { useEffect } from "react";
import Movie from "../components/Movie";
import AddMovie from "../components/AddMovie";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../store/index";
import { MovieList } from "../store/movies/moviesType";
import { loadMovies } from "../store/movies/moviesAction";

const Home = () => {
  const dispatch = useDispatch();

  const movies = useSelector<AppState, MovieList["movies"]>(
    (state) => state.moviesReducer.movies
  );

  useEffect(() => {
    dispatch(loadMovies());
  }, [dispatch]);

  return (
    <div>
      <AddMovie />
      {movies.map((movie) => (
        <Movie
          name={movie.name}
          price={movie.price}
          key={movie.id}
          id={movie.id}
        />
      ))}
    </div>
  );
};

export default Home;
